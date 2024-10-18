
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


INSERT INTO db1.dbo.direccion (idPais, idProvincia, idCanton, idDistrito) 
VALUES 
(1,7,78,8), 
(1,7,78,5), 
(1,7,78,7), 
(1,7,78,12);

