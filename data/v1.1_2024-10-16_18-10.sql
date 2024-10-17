

GO
CREATE TABLE [dbo].[especie] (
    [idEspecie] INT          NOT NULL,
    [nombre]    VARCHAR (25) NOT NULL,
    CONSTRAINT [PK_especie] PRIMARY KEY CLUSTERED ([idEspecie] ASC)
);
GO


GO
CREATE TABLE [dbo].[raza] (
    [idRaza]    INT          NOT NULL,
    [nombre]    VARCHAR (25) NOT NULL,
    [idEspecie] INT          NOT NULL,
    CONSTRAINT [PK_raza] PRIMARY KEY CLUSTERED ([idRaza] ASC),
    CONSTRAINT [FK_raza_especie] FOREIGN KEY ([idEspecie]) REFERENCES [dbo].[especie] ([idEspecie])
);
GO


GO
CREATE TABLE [dbo].[tipoOferta] (
    [idTipoOferta] INT          NOT NULL,
    [nombre]       VARCHAR (20) NOT NULL,
    CONSTRAINT [PK_tipoOferta] PRIMARY KEY CLUSTERED ([idTipoOferta] ASC)
);
GO


GO
CREATE TABLE [dbo].[oferta] (
    [idOferta]         INT            NOT NULL,
    [descripcion]      VARCHAR (255)  NULL,
    [idTipoOferta]     INT            NOT NULL,
    [valor]            DECIMAL (5, 2) NOT NULL,
    [activa]           BIT            NOT NULL,
    [contadorBanderas] INT            NOT NULL,
    CONSTRAINT [PK_oferta] PRIMARY KEY CLUSTERED ([idOferta] ASC),
    CONSTRAINT [FK_oferta_tipoOferta] FOREIGN KEY ([idTipoOferta]) REFERENCES [dbo].[tipoOferta] ([idTipoOferta])
);
GO


GO
CREATE TABLE [dbo].[bandera] (
    [idBandera] INT NOT NULL,
    [nombre]    INT NOT NULL,
    CONSTRAINT [PK_bandera] PRIMARY KEY CLUSTERED ([idBandera] ASC)
);
GO


GO
CREATE TABLE [dbo].[banderaxOferta] (
    [idBandera] INT NOT NULL,
    [idOferta]  INT NOT NULL,
    CONSTRAINT [PK_banderaxOferta] PRIMARY KEY CLUSTERED ([idBandera] ASC),
    CONSTRAINT [FK_banderaxOferta_bandera] FOREIGN KEY ([idBandera]) REFERENCES [dbo].[bandera] ([idBandera]),
    CONSTRAINT [FK_banderaxOferta_oferta] FOREIGN KEY ([idOferta]) REFERENCES [dbo].[oferta] ([idOferta])
);
GO


GO
CREATE TABLE [dbo].[pais] (
    [idPais] INT          NOT NULL,
    [codigo] VARCHAR (3)  NOT NULL,
    [nombre] VARCHAR (20) NOT NULL,
    CONSTRAINT [PK_pais] PRIMARY KEY CLUSTERED ([idPais] ASC)
);
GO


GO
CREATE TABLE [dbo].[provincia] (
    [idProvincia] INT          NOT NULL,
    [idPais]      INT          NOT NULL,
    [nombre]      VARCHAR (20) NOT NULL,
    CONSTRAINT [PK_provincia] PRIMARY KEY CLUSTERED ([idProvincia] ASC),
    CONSTRAINT [FK_provincia_pais] FOREIGN KEY ([idPais]) REFERENCES [dbo].[pais] ([idPais])
);
GO


GO
CREATE TABLE [dbo].[canton] (
    [idCanton]    INT          NOT NULL,
    [nombre]      VARCHAR (20) NOT NULL,
    [idProvincia] INT          NOT NULL,
    CONSTRAINT [PK_canton] PRIMARY KEY CLUSTERED ([idCanton] ASC),
    CONSTRAINT [FK_canton_provincia] FOREIGN KEY ([idProvincia]) REFERENCES [dbo].[provincia] ([idProvincia])
);
GO


GO
CREATE TABLE [dbo].[distrito] (
    [idDistrito] INT          NOT NULL,
    [idCanton]   INT          NOT NULL,
    [nombre]     VARCHAR (20) NOT NULL,
    CONSTRAINT [PK_distrito] PRIMARY KEY CLUSTERED ([idDistrito] ASC),
    CONSTRAINT [FK_distrito_ canton] FOREIGN KEY ([idCanton]) REFERENCES [dbo].[canton] ([idCanton])
);
GO


GO
CREATE TABLE [dbo].[direccion] (
    [idDireccion] INT NOT NULL,
    [idPais]      INT NOT NULL,
    [idProvincia] INT NOT NULL,
    [idDistrito]  INT NOT NULL,
    [idCanton]    INT NOT NULL,
    CONSTRAINT [PK_direccion] PRIMARY KEY CLUSTERED ([idDireccion] ASC),
    CONSTRAINT [FK_direccion_canton] FOREIGN KEY ([idCanton]) REFERENCES [dbo].[canton] ([idCanton]),
    CONSTRAINT [FK_direccion_distrito] FOREIGN KEY ([idDistrito]) REFERENCES [dbo].[distrito] ([idDistrito]),
    CONSTRAINT [FK_direccion_pais] FOREIGN KEY ([idPais]) REFERENCES [dbo].[pais] ([idPais]),
    CONSTRAINT [FK_direccion_provincia] FOREIGN KEY ([idProvincia]) REFERENCES [dbo].[provincia] ([idProvincia])
);
GO


GO
CREATE TABLE [dbo].[usuario] (
    [idUsuario]       INT          NOT NULL,
    [nombre]          VARCHAR (50) NOT NULL,
    [apellido]        VARCHAR (50) NOT NULL,
    [correo]          VARCHAR (50) NOT NULL,
    [telefono]        VARCHAR (20) NOT NULL,
    [puntuacion]      FLOAT (53)   NOT NULL,
    [fechaNacimiento] DATE         NOT NULL,
    [idDireccion]     INT          NOT NULL,
    CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED ([idUsuario] ASC),
    CONSTRAINT [FK_usuario_direccion] FOREIGN KEY ([idDireccion]) REFERENCES [dbo].[direccion] ([idDireccion])
);
GO


GO
CREATE TABLE [dbo].[especialidad] (
    [idEspecialidad] INT          NOT NULL,
    [nombre]         VARCHAR (40) NOT NULL,
    CONSTRAINT [PK_especialidad] PRIMARY KEY CLUSTERED ([idEspecialidad] ASC)
);
GO


GO
CREATE TABLE [dbo].[veterinario] (
    [idVeterinario]  INT          NOT NULL,
    [idUsuario]      INT          NOT NULL,
    [idEspecialidad] INT          NOT NULL,
    [numeroCuenta]   VARCHAR (30) NOT NULL,
    CONSTRAINT [PK_veterinario] PRIMARY KEY CLUSTERED ([idVeterinario] ASC),
    CONSTRAINT [FK_veterinario_especialidad] FOREIGN KEY ([idEspecialidad]) REFERENCES [dbo].[especialidad] ([idEspecialidad]),
    CONSTRAINT [FK_veterinario_usuario] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[usuario] ([idUsuario])
);
GO


GO
CREATE TABLE [dbo].[disponibilidad] (
    [idDisponibilidad] INT      NOT NULL,
    [idVeterinario]    INT      NOT NULL,
    [diaInicio]        DATE     NOT NULL,
    [diaFin]           DATE     NOT NULL,
    [horaInicio]       TIME (7) NOT NULL,
    [horaFin]          TIME (7) NOT NULL,
    [duracionxcita]    INT      NOT NULL,
    CONSTRAINT [PK_veterinariosxhorarios] PRIMARY KEY CLUSTERED ([idDisponibilidad] ASC),
    CONSTRAINT [FK_disponibilidad_veterinario] FOREIGN KEY ([idVeterinario]) REFERENCES [dbo].[veterinario] ([idVeterinario])
);
GO


GO
CREATE TABLE [dbo].[banderaxUsuario] (
    [idUsuario]   INT      NOT NULL,
    [idBandera]   INT      NOT NULL,
    [tiene]       BIT      NOT NULL,
    [fechaInicio] DATE     NULL,
    [fechaFin]    DATE     NULL,
    [horaInicio]  TIME (7) NULL,
    [horaFin]     TIME (7) NULL,
    CONSTRAINT [PK_banderasUsuario] PRIMARY KEY CLUSTERED ([idUsuario] ASC),
    CONSTRAINT [FK_banderasxUsuario_usuario] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[usuario] ([idUsuario]),
    CONSTRAINT [FK_banderaxUsuario_bandera] FOREIGN KEY ([idBandera]) REFERENCES [dbo].[bandera] ([idBandera])
);
GO


GO
CREATE TABLE [dbo].[estado] (
    [idEstado] INT NOT NULL,
    [nombre]   INT NOT NULL,
    CONSTRAINT [PK_estado] PRIMARY KEY CLUSTERED ([idEstado] ASC)
);
GO


GO
CREATE TABLE [dbo].[cita] (
    [idCita]           INT           NOT NULL,
    [idDisponibilidad] INT           NOT NULL,
    [fecha]            DATETIME2 (7) NOT NULL,
    [idVeterinario]    INT           NOT NULL,
    [horaInicio]       TIME (7)      NOT NULL,
    [horaFin]          TIME (7)      NOT NULL,
    [idEstado]         INT           NOT NULL,
    [idUsuario]        INT           NULL,
    [descripcion]      VARCHAR (256) NULL,
    [checkoutToken]    VARCHAR (32)  NULL,
    CONSTRAINT [PK_cita] PRIMARY KEY CLUSTERED ([idCita] ASC),
    CONSTRAINT [FK_cita_disponibilidad] FOREIGN KEY ([idDisponibilidad]) REFERENCES [dbo].[disponibilidad] ([idDisponibilidad]),
    CONSTRAINT [FK_cita_estado] FOREIGN KEY ([idEstado]) REFERENCES [dbo].[estado] ([idEstado]),
    CONSTRAINT [FK_cita_usuario] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[usuario] ([idUsuario]),
    CONSTRAINT [FK_cita_veterinario] FOREIGN KEY ([idVeterinario]) REFERENCES [dbo].[veterinario] ([idVeterinario])
);
GO


GO
CREATE TABLE [dbo].[mascota] (
    [idMascota]       INT          NOT NULL,
    [nombre]          VARCHAR (50) NOT NULL,
    [fechaNacimiento] DATE         NOT NULL,
    [idRaza]          INT          NOT NULL,
    [idUsuario]       INT          NOT NULL,
    CONSTRAINT [PK_mascota] PRIMARY KEY CLUSTERED ([idMascota] ASC),
    CONSTRAINT [FK_mascota_duenoMascota] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[usuario] ([idUsuario]),
    CONSTRAINT [FK_mascota_raza] FOREIGN KEY ([idRaza]) REFERENCES [dbo].[raza] ([idRaza])
);
GO


GO
CREATE TABLE [dbo].[comentario] (
    [idComentario] INT           NOT NULL,
    [idUsuario]    INT           NOT NULL,
    [idComentador] INT           NOT NULL,
    [puntuacion]   FLOAT (53)    NOT NULL,
    [comentario]   VARCHAR (256) NOT NULL,
    [fecha]        DATETIME      NOT NULL,
    CONSTRAINT [PK_comentarios] PRIMARY KEY CLUSTERED ([idComentario] ASC),
    CONSTRAINT [FK_comentarios_comentador] FOREIGN KEY ([idComentador]) REFERENCES [dbo].[usuario] ([idUsuario]),
    CONSTRAINT [FK_comentarios_usuario] FOREIGN KEY ([idUsuario]) REFERENCES [dbo].[usuario] ([idUsuario])
);
GO


GO
CREATE TABLE [dbo].[ErrorLog] (
    [ErrorLogID]     INT             IDENTITY (1, 1) NOT NULL,
    [ErrorTime]      DATETIME        CONSTRAINT [DF_ErrorLog_ErrorTime] DEFAULT (getdate()) NOT NULL,
    [UserName]       [sysname]       NOT NULL,
    [ErrorNumber]    INT             NOT NULL,
    [ErrorSeverity]  INT             NULL,
    [ErrorState]     INT             NULL,
    [ErrorProcedure] NVARCHAR (126)  NULL,
    [ErrorLine]      INT             NULL,
    [ErrorMessage]   NVARCHAR (4000) NOT NULL,
    CONSTRAINT [PK_ErrorLog_ErrorLogID] PRIMARY KEY CLUSTERED ([ErrorLogID] ASC)
);
GO
