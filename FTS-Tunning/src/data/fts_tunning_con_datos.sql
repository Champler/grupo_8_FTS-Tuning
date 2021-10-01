-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: fts_tunning_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_FK` (`user_id`),
  CONSTRAINT `cart_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_detail`
--

DROP TABLE IF EXISTS `cart_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_detail_FK` (`product_id`),
  KEY `cart_detail_FK_1` (`cart_id`),
  CONSTRAINT `cart_detail_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart_detail_FK_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_detail`
--

LOCK TABLES `cart_detail` WRITE;
/*!40000 ALTER TABLE `cart_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Frenos'),(2,'Motores'),(3,'Volantes'),(4,'Interiores'),(5,'Neumaticos'),(6,'Escapes');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `images_FK` (`product_id`),
  CONSTRAINT `images_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (27,'1633119178234_img_.jpg',22),(28,'1633119178235_img_.jpg',22),(29,'1633119279434_img_.jpg',23),(30,'1633119279435_img_.jpg',23),(31,'1633119397745_img_.jpg',24),(32,'1633119397746_img_.jpg',24),(33,'1633119529199_img_.jpg',25),(34,'1633119529199_img_.jpg',25),(35,'1633119529200_img_.jpg',25),(40,'1633120252918_img_.jpg',28),(41,'1633120252919_img_.jpg',28),(42,'1633120365148_img_.jpg',29),(43,'1633120365148_img_.jpg',29),(44,'1633120467273_img_.jpeg',30),(45,'1633120467274_img_.jpeg',30),(46,'1633120647481_img_.jpg',31),(47,'1633120647482_img_.jpg',31),(48,'1633120728947_img_.jpg',32),(49,'1633120728948_img_.jpg',32),(50,'1633120728949_img_.jpg',32),(55,'1633120928738_img_.jpg',34),(56,'1633120928739_img_.jpg',34),(57,'1633121008445_img_.jpg',35),(58,'1633121008446_img_.jpg',35),(59,'1633121008448_img_.jpg',35),(60,'1633121209205_img_.jpg',36),(61,'1633121209205_img_.jpg',36),(62,'1633121309885_img_.jpg',37),(63,'1633121309886_img_.jpg',37),(64,'1633121309888_img_.jpg',37),(68,'1633121451720_img_.jpg',27),(69,'1633121451721_img_.jpg',27),(70,'1633121480380_img_.jpg',26),(71,'1633121480380_img_.jpg',26),(72,'1633121480381_img_.jpg',26),(73,'1633121494869_img_.jpg',33),(74,'1633121494870_img_.jpg',33),(75,'1633121494872_img_.jpg',33),(76,'1633121551151_img_.jpg',38),(77,'1633121551151_img_.jpg',38),(78,'1633121551152_img_.jpg',38),(79,'1633121620139_img_.jpg',39),(80,'1633121620139_img_.jpg',39),(81,'1633121620140_img_.jpg',39);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_types`
--

DROP TABLE IF EXISTS `payment_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_types`
--

LOCK TABLES `payment_types` WRITE;
/*!40000 ALTER TABLE `payment_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `carModel` varchar(40) NOT NULL,
  `brand` varchar(40) NOT NULL,
  `year` int(11) NOT NULL,
  `color` varchar(25) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (22,'Juego Pastillas De Freno Delanteras','Jgo. de pastillas de freno delanteras marca Bosch para Peugeot 206 / 207 equipados con motores 1.9 diesel y 1.6 8V y 1.4 Nafta.\r\n\r\nBosch es una empresa líder en su segmento y proveedora de pastillas de freno originales para las principales automotrices, siendo una de ellas Peugeot\r\n\r\nSKU 2161\r\n\r\n\r\nCOMPOSICIÓN:\r\n\r\n4 Pastillas de Freno Delanteras Marca Bosch\r\n\r\nIMPORTANTE: Siempre corroborar el modelo con los últimos 8 dígitos del chasis.\r\n\r\n\r\nAPLICACIÓN:\r\n\r\nPeugeot 206 1.4 8v Nafta\r\nPeugeot 207 1.4 8V Nafta\r\nPeugeot 206 1.6 8V Nafta\r\nPeugeot 206 1.9 Diesel\r\nPeugeot 207 1.9 Diesel.\r\n\r\n','207','Peugeot',2021,'no',100,10,1500,1),(23,'Kit Pastillas De Freno Bosch','UEGO DE PASTILLAS DE FRENO BOSCH ORIGINALES DELANTERAS Y TRASERAS.\r\n\r\nVOLKSWAGEN:\r\n\r\nBORA 2.0 todas las versiones\r\n\r\nImportante: no aplican en motores 1.8T','Bora','Volkswagen',2021,'no',100,12,5600,1),(24,'Kit Discos Y Pastillas ','2 DISCOS DE FRENO CORVEN - 1 JUEGO PASTILLA MAZFREN','Crossfox Suran','Volkswagen',2021,'no',100,0,7000,1),(25,'Motor Semiarmado Cruze 2017/ 1.4 Con Tapa Cil. Chevrolet','MOTOR SEMIARMADO CRUZE 1.4 2017 EN ADELANTE\r\nEL MOTROR INCLUYE:\r\nCIGUEÑAL\r\nBIELAS\r\nPISTONES\r\nAROS\r\nMETALES\r\nTAPA DE CILINDRO\r\nCARTER','Cruze 1.4','Chevrolet',2021,'no',100,5,238225,2),(26,'Motor Completo Sonic 1.6 L (at)(mh9) Chevrolet 55568282','LAS FOTOS PUEDEN SER DE REFERENCIA\r\nREPUESTO NUEVO ORIGINAL 0KM DE GENERAL MOTORS\r\nSE ENTREGA CON DOCUMENTACION PARA TRAMITE REGISTRAL\r\nMOTOR 1.6 16 VALVULAS PARA SONIC','Sonic','Chevrolet',2021,'no',10,4,450472,2),(27,'Volante Auto Universal Deportivo 3 Rayos 38cm + Adaptador','Volante para auto universal. Incluye adaptador junto a los tornillos listo para colocar.\r\nMaterial de cuero detallado, calidad asegurada. Contiene grip para que su agarre sea cómodo y reconfortante','Universal','Warvol',2021,'Negro',100,12,5550,3),(28,'Volante Auto Camioneta Clasico Madera Caoba Aluminio Vintage','Excelente Volante de Madera real (Caoba) y aluminio\r\nincluye sistema de boton para accionar bocina.\r\nDiametro 38cm\r\n','Camioneta Clasica','crazy horse speed shop',2021,'no',2,20,39000,3),(29,'Cubre Volante Cocido Alta Calidad Cuerina Negro Hilo Rojo','CUBRE VOLANTE DE CUERO SINTETICO\r\nPARA COSER UNO MISMO.\r\nANCHO 10.3CM\r\nRAPIDA INSTALACION.\r\nFACIL DE INSTALAR, UNIVERSAL.\r\nCOSTURA A COSTURA UNIDO Y CON BASE ESPUMADA (NO CAMBIA EL AGARRE LO HACE MAS CONFORTABLE).NO HACE TRANSPIRAR LAS MANOS.\r\nSOLO TENES QUE UNIR DE COSTURA A COSTURA.\r\nCOLORES DE FUNDAS DISPONIBLES.','universal','Auto-Tuning',2021,'Negro',130,10,950,3),(30,'Fundas Cubre Asientos Auto Cuerina Cuero Ecológico Easy','FUNDA CUERO ECOLÓGICO LINEA DINAMIC\r\n\r\nCARACTERÍSTICAS:\r\n\r\n> CUERO ECOLÓGICO MÁXIMA RESISTENCIA A LA FRICCIÓN DIARIA Y SUCIEDAD\r\n> COSTURAS REFORZADAS\r\n> AFELPADO POR DENTRO\r\n> UNIVERSAL PARA ASIENTOS ESTÁNDAR','Universal','Dinamic',2021,'no',20,30,2699,4),(31,'Kit X2 Neumaticos Fate 175/70 R13 Prestiva 82t','Tamaño: 175/70 R13\r\nTipo de terreno: HT\r\nCantidad de neumáticos: 1\r\nVelocidad máxima: 190 km/h','-','Fate',2021,'Negro',30,12,31500,5),(32,'Bocha Y Fuelle Palanca Cambios Chevrolet Gatillo Negro','FUELLE PARA LA PALANCA DE CAMBIOS DE CHEVROLET CORSA-CLASSIC-CORSA 2- MERIVA- CELTA- FUN- PRISMA VIEJO HASTA AÑO 2012 CON BASE\r\nCON GATILLO (MARCHA ATRAS PARA ADELANTE)\r\n\r\nBOCHA FONDO NEGRO Y FUELLE NEGRO','','Chevrolet',2021,'Negro',120,0,890,4),(33,'Tapa De Cilindros Renault 2.0 F4r ','Material: Aluminio\r\nÁrbol de levas incluido: Sí\r\nGuías de válvulas incluidas: Sí\r\nPosición de las bujías: Vertical\r\nOrigen: Francia\r\nDescripción\r\nUsada original motor 2.0 f4r modelo nuevo duster captur oroch sandero 2,con válvulas platillos resortes botadores balancines árbol de levas','Duster Captur Oroch','Renault',2021,'no',3,12,92000,2),(34,'Neumático Pirelli Formula Evo 175/70 R13 82 T','Con el neumático Pirelli podrás contar con la calidad y estabilidad que tu vehículo necesita. Vas a poder realizar viajes soñados sin tener que preocuparte si las ruedas son las indicadas, ya que con Pirelli no tenés límite en tus rutas.\r\n\r\nEstabilidad y control\r\nGracias a su buen agarre, este neumático tiene un desempeño óptimo asegurado, ya que se adapta a la usabilidad de tu vehículo.\r\n\r\nAlta eficiencia\r\nEsta cubierta está preparada para maximizar la eficiencia del combustible; su ligereza y la combinación de sus materiales te garantizarán un óptimo rendimiento en tus viajes.\r\n\r\nLa seguridad que buscabas\r\nApto para circular sobre asfalto sin presentar desgaste e ideal para alcanzar grandes velocidades. Posee una excelente capacidad para adherirse a terrenos secos y mojados. A su vez, ofrece una tracción silenciosa y contribuye al consumo razonable de combustible.','Universal','Pirelli',2021,'no',2,45,15600,5),(35,'Cubre Alfombra Goma Pesada Universal 3 Piezas Auto Camioneta','Cubre Alfombra Goma Pesada Universal 3 Piezas Auto Camioneta\r\n\r\n- MEDIDAS:\r\n-- ALFOMBRAS DELANTERAS 73cm x 43cm CADA UNA\r\n-- ALFOMBRA TRASERA 140cm x 42cm\r\n\r\n-- INCLUYE 2 PARTES DELANTERAS Y 1 TRASERA ENTERA\r\n-- COLOR NEGRA\r\n-- FACIL INSTALACION\r\n-- FACIL LIMPIEZA\r\n-- SUPERFICIE ANTIDESLIZANTE\r\n-- PVC FLEXIBLE DE ALTA DENSIDAD\r\n-- ALTA RESISTENCIA MULTIAGENTE\r\n-- PROTEGE EL INTERIOR DEL VEHICULO\r\n-- MARCADA PARA CORTAR (ADAPTABLE A SU VEHICULO)','Universal','-',2021,'Negro',30,12,1650,4),(36,'Neumatico Goodyear Assurance 195/60 R16 89t','NEUMÁTICO GOODYEAR ASSURANCE\r\nNeumático para todas las estaciones de bajo consumo.\r\nNueva banda de rodamiento con un 16% más de vida útil con respecto al diseño anterior.\r\nRanuras circunferenciales que mueven el agua y aseguran el contacto con el camino.\r\n','-','Goodyear',2019,'no',23,12,24000,5),(37,'Escape Silens Pro Silenpro Minikit Gacel Senda Saveiro','Turbo Silens interior con rejilla silens y lana blanca de la mejor calidad. acople para escape original. cola en acero inoxidable esmerilado.\r\n\r\nESTA CAMARA REEMPLAZA EL SILENCIADOR TRASERO\r\n\r\nLISTO PARA INSTALAR SIN MODIFICAR EL ESCAPE ORIGINAL (REEMPLAZA AL SILENCIADOR TRASERO)\r\nSE INSTALA SOBRE EL CAÑO ORIGINAL EN LOS CASOS QUE DE FABRICA VIENE CON BRIDA SE USA LA MISMA BRIDA Y EN LOS CASOS QUE NO SE CORTA EL ORIGINAL Y SE SUELDA ESTE','-','SilenPro',2021,'Plateado',5,10,11500,6),(38,'Cola Cano Escape Doble Auto-pick Alta Calidad Cromado','Caño de escape equipo deportivo cromado\r\nLargo 35 mm aproximadamente','-','-',2021,'no',42,21,5999,6),(39,'Multiple + Bumbum Volkswagen Gacel / Senda / G1 Bellasilens','MULTIPLE BELLASILENS 4 A 1 LARGO Y COMPENSADO + ACOPLE DE MULTIPLE CON SOPORTE DE CAJA + BUMBUM CON CAÑERIA EN 2 PULGADAS.\r\n\r\nIDEAL PARA SENDA / GACEL Y GOL GENERACION 1.\r\n\r\nAL BUMBUM AHI QUE HACERLE LOS SOPORTES A MEDIDA, SENDA / GACEL NO TIENEN SOPORTES AL MEDIO, MANDAMOS A TODO EL PAIS !!','-','Volkswagen',2021,'Plateado',50,25,25200,6);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_method_id` int(11) NOT NULL,
  `payment_type_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ticket_FK` (`payment_type_id`),
  KEY `ticket_FK_1` (`payment_method_id`),
  KEY `ticket_FK_2` (`cart_id`),
  CONSTRAINT `ticket_FK` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ticket_FK_1` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ticket_FK_2` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `rol` varchar(40) NOT NULL,
  `image` varchar(150) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL,
  `cp` int(11) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Usuario','Admin','admin@mail.com','$2a$10$UJK3oAyLfBQkd2tyeJs8j.z.A4XRZ5R2WIhlBQdp9axUY7lW6uY.2','admin','default-image.png','','',0,''),(8,'Jose','Perez','Jose@gmail.com','$2a$10$1YlzSd/uhCq9HpTS0dd6OOA5oYk6He0IGKMR3/Cg6uA1M7HTVp20e','user','1633121782350.jpeg','Buenos Aires','Entre Rios 270',1661,'San Miguel');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fts_tunning_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-01 17:57:43
