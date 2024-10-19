
INSERT INTO [dbo].[pais] ([codigo],[nombre])
VALUES
('CRI','Costa Rica')


INSERT INTO db1.dbo.provincia (idPais, nombre) 
VALUES 
(1, 'San José'),
(1, 'Alajuela'),
(1, 'Cartago'),
(1, 'Heredia'),
(1, 'Guanacaste'),
(1, 'Puntarenas'),
(1, 'Limón');


INSERT INTO db1.dbo.canton (nombre, idProvincia) 
VALUES
-- Cantones de San José (idProvincia = 1)
('San José', 1),
('Escazú', 1),
('Desamparados', 1),
('Puriscal', 1),
('Tarrazú', 1),
('Aserrí', 1),
('Mora', 1),
('Goicoechea', 1),
('Santa Ana', 1),
('Alajuelita', 1),
('Vázquez de Coronado', 1),
('Acosta', 1),
('Tibás', 1),
('Moravia', 1),
('Montes de Oca', 1),
('Turrubares', 1),
('Dota', 1),
('Curridabat', 1),
('Pérez Zeledón', 1),
('León Cortés', 1),

-- Cantones de Alajuela (idProvincia = 2)
('Alajuela', 2),
('San Ramón', 2),
('Grecia', 2),
('San Mateo', 2),
('Atenas', 2),
('Naranjo', 2),
('Palmares', 2),
('Poás', 2),
('Orotina', 2),
('San Carlos', 2),
('Zarcero', 2),
('Sarchí', 2),
('Upala', 2),
('Los Chiles', 2),
('Guatuso', 2),
('Río Cuarto', 2),

-- Cantones de Cartago (idProvincia = 3)
('Cartago', 3),
('Paraíso', 3),
('La Unión', 3),
('Jiménez', 3),
('Turrialba', 3),
('Alvarado', 3),
('Oreamuno', 3),
('El Guarco', 3),

-- Cantones de Heredia (idProvincia = 4)
('Heredia', 4),
('Barva', 4),
('Santo Domingo', 4),
('Santa Bárbara', 4),
('San Rafael', 4),
('San Isidro', 4),
('Belén', 4),
('Flores', 4),
('San Pablo', 4),
('Sarapiquí', 4),

-- Cantones de Guanacaste (idProvincia = 5)
('Liberia', 5),
('Nicoya', 5),
('Santa Cruz', 5),
('Bagaces', 5),
('Carrillo', 5),
('Cañas', 5),
('Abangares', 5),
('Tilarán', 5),
('Nandayure', 5),
('La Cruz', 5),
('Hojancha', 5),

-- Cantones de Puntarenas (idProvincia = 6)
('Puntarenas', 6),
('Esparza', 6),
('Buenos Aires', 6),
('Montes de Oro', 6),
('Osa', 6),
('Quepos', 6),
('Golfito', 6),
('Coto Brus', 6),
('Parrita', 6),
('Corredores', 6),
('Garabito', 6),

-- Cantones de Limón (idProvincia = 7)
('Limón', 7),
('Pococí', 7),
('Siquirres', 7),
('Talamanca', 7),
('Matina', 7),
('Guácimo', 7);


INSERT INTO db1.dbo.distrito (nombre, idCanton)
VALUES
('Limón', 77),
('Valle La Estrella', 77),
('Río Blanco', 77),
('Matama', 77),
('Guápiles', 78),
('Jiménez', 78),
('La Rita', 78),
('Roxana', 78),
('Cariari', 78),
('Colorado', 78),
('La Colonia', 78),
('Siquirres', 79),
('Pacuarito', 79),
('Florida', 79),
('Germania', 79),
('Cairo', 79),
('Alegría', 79),
('Bratsi', 80),
('Sixaola', 80),
('Cahuita', 80),
('Telire', 80),
('Matina', 81),
('Batán', 81),
('Carrandi', 81),
('Guácimo', 82),
('Mercedes', 82),
('Pocora', 82),
('Río Jiménez', 82),
('Duacarí', 82);


INSERT INTO db1.dbo.direccion (idPais, idProvincia, idCanton, idDistrito, direccionExacta, posicion, codigoPostal) 
VALUES 
(1,7,78,8,'456 Avenida Central, Ciudad, País', geography::STPointFromText('POINT(-84.0750 9.8600)', 4326), '67890'), 
(1,7,78,5,'1011 Boulevard Principal, Ciudad, País', geography::STPointFromText('POINT(-84.0772 9.8622)', 4326), '98765'), 
(1,7,78,7,'1011 Boulevard Principal, Ciudad, País', geography::STPointFromText('POINT(-84.0772 9.8622)', 4326), '98765'), 
(1,7,78,12,'1213 Calle Tercera, Ciudad, País', geography::STPointFromText('POINT(-84.0783 9.8633)', 4326), '11223'),
(1,7,81,24,'1415 Avenida Cuarta, Ciudad, País', geography::STPointFromText('POINT(-84.0794 9.8644)', 4326), '33445'),
(1,7,82,25,'1617 Calle Quinta, Ciudad, País', geography::STPointFromText('POINT(-84.0805 9.8655)', 4326), '55667'),
(1,7,82,26,'1819 Avenida Sexta, Ciudad, País', geography::STPointFromText('POINT(-84.0816 9.8666)', 4326), '77889'),
(1,7,82,27,'2021 Calle Séptima, Ciudad, País', geography::STPointFromText('POINT(-84.0827 9.8677)', 4326), '99001'),
(1,7,82,29,'2223 Avenida Octava, Ciudad, País', geography::STPointFromText('POINT(-84.0838 9.8688)', 4326), '22334'),
(1,7,80,19,'2425 Calle Novena, Ciudad, País', geography::STPointFromText('POINT(-84.0849 9.8699)', 4326), '44556'),
(1,7,78,9,'2627 Avenida Décima, Ciudad, País', geography::STPointFromText('POINT(-84.0860 9.8700)', 4326), '66778');

INSERT INTO [dbo].[usuario] ([nombre] ,[apellido] ,[correo] ,[telefono],[fechaNacimiento] ,[idDireccion])
     VALUES 
    ('Josue David', 'Echeverria Perez', 'josuecrperez@gmail.com', '83107055', '2002-02-02', 1),
    ('Maria Elena', 'Rodriguez Gomez', 'maria.rodriguez@gmail.com', '84561234', '1990-11-10', 2),
    ('Carlos Andres', 'Martinez Fernandez', 'carlos.martinez@hotmail.com', '89675421', '1985-05-25', 3),
    ('Ana Gabriela', 'Lopez Mora', 'ana.lopez@yahoo.com', '81234567', '1995-07-15', 4),
    ('Jorge Luis', 'Ramirez Castro', 'jorge.ramirez@gmail.com', '86549875', '1992-09-08', 5),
    ('Lucia Beatriz', 'Vargas Solano', 'lucia.vargas@hotmail.com', '81976543', '1987-03-22', 6),
    ('Fernando Jose', 'Arias Pineda', 'fernando.arias@gmail.com', '83214789', '1994-06-14', 7),
    ('Gabriela Maria', 'Diaz Rojas', 'gabriela.diaz@yahoo.com', '89653214', '1989-08-30', 8),
    ('Ricardo Esteban', 'Herrera Sanchez', 'ricardo.herrera@hotmail.com', '87654321', '1983-01-12', 9),
    ('Laura Patricia', 'Soto Jimenez', 'laura.soto@gmail.com', '89123456', '1996-04-28', 10),
    ('Manuel Antonio', 'Chacon Rivera', 'manuel.chacon@hotmail.com', '85236987', '1988-12-19', 11),
    ('Diana Carolina', 'Gutierrez Porras', 'diana.gutierrez@gmail.com', '83456712', '1991-03-07', 9),
    ('Alberto Javier', 'Mendez Ocampo', 'alberto.mendez@hotmail.com', '87765432', '1997-05-11', 10),
    ('Karla Sofia', 'Zamora Muñoz', 'karla.zamora@yahoo.com', '82415673', '1993-11-17', 4),
    ('Felipe Alejandro', 'Vega Rojas', 'felipe.vega@gmail.com', '81876543', '1990-09-09', 6)
    ;


INSERT INTO [dbo].[especie] ([nombre])
     VALUES
        ('Perro')
        ,('Gato');

INSERT INTO [dbo].[raza]([nombre], [idEspecie])
     VALUES
    ('Golden Retriever', 1),
    ('Labrador Retriever', 1),
    ('German Shepherd', 1),
    ('Bulldog', 1),
    ('Poodle', 1),
    ('Beagle', 1),
    ('Rottweiler', 1),
    ('Siberian Husky', 1),
    ('Boxer', 1),
    ('Dachshund', 1),
    ('Persian', 2),
    ('Maine Coon', 2),
    ('Siamese', 2),
    ('Sphynx', 2),
    ('Bengal', 2),
    ('Ragdoll', 2),
    ('British Shorthair', 2),
    ('Abyssinian', 2),
    ('Scottish Fold', 2),
    ('Russian Blue', 2);

INSERT INTO dbo.especialidad (nombre)
    VALUES 
    ('Medicina Interna'),
    ('Cirugía Veterinaria'),
    ('Dermatología'),
    ('Cardiología'),
    ('Oncología');


INSERT INTO [dbo].[veterinario] ([idUsuario],[idEspecialidad],[numeroCuenta],[descripcion])
VALUES
    (1, 3, '372945106542397','Cuido a tus mascotas como parte de la familia.')
    ,(2,5,'193748520914567','Tu mascota, mi compromiso.')
    ,(3,4,'624850193267489','Experto en bienestar animal, con corazón.')
    ,(4,2,'285619740352816','Donde cada vida peluda es mi prioridad.')
    ,(5,2,'930514872630975','Cuidando a quienes más te importan.')
    ,(6,3,'741293086514720','Tu mascota en las mejores manos.')
    ,(7,1,'859321047586230','Salud y amor para tu mejor amigo.');


INSERT INTO [dbo].[mascota] ([nombre],[fechaNacimiento],[idRaza],[idUsuario])
     VALUES
		('Nala','2011-06-15',12,8),
		('Max','2013-09-24',6,9),
		('Luna','2015-02-08',7,10),
		('Milo','2018-07-30',1,11),
		('Simba','2020-11-19',3,12),
		('Bella','2021-03-22',4,13),
		('Rocky','2016-12-05',17,14),
		('Coco','2023-01-17',15,15);


