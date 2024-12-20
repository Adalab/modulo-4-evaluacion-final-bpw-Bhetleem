INSERT INTO dogs (name, breed, DOB, behaviour) VALUES 
('Penny', 'Breton', '2010-11-01', 'Inteligente y muy cariñosa. Asustadiza con desconocidos. Lider'), 
('Funky', 'Pero de aguas', '2019-03-01', 'Cariñoso y sumiso. Confiado y juguetón'), 
('Ejemplo', 'Podenco', '2020-05-01', 'Muy asustadizo');

INSERT INTO adopters (name, lastname, DNI) VALUES 
('Alejandro', 'González Trigo', '12344526X'), 
('Carla', 'Dimas Aguas', '12344526V'), 
('Nadia', 'Toledo Fernández', '12344526S');

ALTER TABLE dogs ADD COLUMN fk_adopter INT;	
ALTER TABLE dogs ADD FOREIGN KEY(fk_adopter) REFERENCES adopters(id);	

UPDATE dogs SET fk_adopter = 2 WHERE id = 1;	 
UPDATE dogs SET fk_adopter = 3 WHERE id = 2;
UPDATE dogs SET fk_adopter = 1 WHERE id = 3;

INSERT INTO dogs(name, breed, DOB, behaviour) VALUES ('Mona', 'Mixed', '2024-07-01', 'Cariñosa y juguetona');

INSERT INTO dogs(name, breed, DOB, behaviour) VALUES ('Moka', 'chihuahua', '2023-07-01', 'Cariñosa y juguetona');






