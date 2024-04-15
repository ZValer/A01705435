-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: lab20materiales
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bitacora`
--

DROP TABLE IF EXISTS `bitacora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bitacora` (
  `idBitacora` int NOT NULL AUTO_INCREMENT,
  `operacion` varchar(20) DEFAULT NULL,
  `idClave` int DEFAULT NULL,
  `Fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idBitacora`),
  KEY `idClave` (`idClave`),
  CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`idClave`) REFERENCES `materiales` (`clave`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bitacora`
--

LOCK TABLES `bitacora` WRITE;
/*!40000 ALTER TABLE `bitacora` DISABLE KEYS */;
INSERT INTO `bitacora` VALUES (1,'Alta material',3000,'2024-04-15 16:11:20'),(2,'Alta material',3100,'2024-04-15 16:12:01');
/*!40000 ALTER TABLE `bitacora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `descripciones_entregadas_2000`
--

DROP TABLE IF EXISTS `descripciones_entregadas_2000`;
/*!50001 DROP VIEW IF EXISTS `descripciones_entregadas_2000`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `descripciones_entregadas_2000` AS SELECT 
 1 AS `descripcion`,
 1 AS `fecha`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `entregan`
--

DROP TABLE IF EXISTS `entregan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entregan` (
  `clave` int NOT NULL,
  `rfc` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `numero` int NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`clave`,`rfc`,`numero`,`fecha`),
  KEY `rfc` (`rfc`),
  KEY `numero` (`numero`),
  CONSTRAINT `entregan_ibfk_1` FOREIGN KEY (`rfc`) REFERENCES `proveedores` (`rfc`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `entregan_ibfk_2` FOREIGN KEY (`numero`) REFERENCES `proyectos` (`numero`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `entregan_ibfk_3` FOREIGN KEY (`clave`) REFERENCES `materiales` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entregan`
--

LOCK TABLES `entregan` WRITE;
/*!40000 ALTER TABLE `entregan` DISABLE KEYS */;
INSERT INTO `entregan` VALUES (1000,'AAAA800101',5000,'2001-12-13',165),(1000,'AAAA800101',5019,'1999-07-13',254),(1000,'VAGO7809011',5000,'2001-12-31',350),(1020,'CCCC800101',5002,'2003-12-16',582),(1020,'CCCC800101',5017,'2000-03-29',8),(1030,'DDDD800101',5003,'1998-01-12',202),(1030,'DDDD800101',5016,'2005-06-07',295),(1040,'EEEE800101',5004,'1999-12-18',263),(1040,'EEEE800101',5015,'1999-05-29',540),(1050,'FFFF800101',5005,'2004-02-07',503),(1050,'FFFF800101',5014,'2000-04-18',623),(1060,'GGGG800101',5006,'2004-09-29',324),(1060,'GGGG800101',5013,'2002-07-23',692),(1070,'HHHH800101',5007,'2006-11-21',2),(1070,'HHHH800101',5012,'2004-11-27',503),(1080,'AAAA800101',5008,'2005-04-03',86),(1080,'AAAA800101',5011,'2003-08-28',699),(1090,'BBBB800101',5009,'1997-03-13',73),(1090,'BBBB800101',5010,'1998-11-17',421),(1100,'CCCC800101',5009,'2000-12-07',466),(1100,'CCCC800101',5010,'2001-11-19',699),(1110,'DDDD800101',5008,'2005-06-03',337),(1110,'DDDD800101',5011,'2002-01-13',368),(1120,'EEEE800101',5007,'2003-11-21',692),(1120,'EEEE800101',5012,'1997-08-05',215),(1130,'FFFF800101',5006,'2000-04-13',562),(1130,'FFFF800101',5013,'2000-02-09',63),(1140,'GGGG800101',5005,'2000-06-30',583),(1140,'GGGG800101',5014,'1999-06-28',219),(1150,'HHHH800101',5004,'2002-11-14',453),(1150,'HHHH800101',5015,'2006-02-16',458),(1160,'AAAA800101',5016,'1997-08-09',162),(1160,'AAAA800101',5019,'2003-05-05',244),(1170,'BBBB800101',5017,'2002-01-31',180),(1170,'BBBB800101',5018,'2006-07-12',53),(1180,'CCCC800101',5017,'2002-04-17',334),(1180,'CCCC800101',5018,'2001-10-24',407),(1190,'DDDD800101',5016,'2005-11-07',356),(1190,'DDDD800101',5019,'2004-11-19',94),(1200,'EEEE800101',5000,'2003-03-15',177),(1200,'EEEE800101',5015,'1998-11-07',585),(1210,'FFFF800101',5001,'2000-05-21',43),(1210,'FFFF800101',5014,'2002-09-26',70),(1220,'GGGG800101',5002,'2005-07-03',24),(1220,'GGGG800101',5013,'1998-12-16',658),(1230,'HHHH800101',5003,'1998-09-12',530),(1230,'HHHH800101',5012,'2004-08-23',312),(1240,'AAAA800101',5004,'0000-00-00',152),(1240,'AAAA800101',5011,'1997-03-13',366),(1250,'BBBB800101',5005,'2003-10-12',71),(1250,'BBBB800101',5010,'1999-01-25',691),(1260,'CCCC800101',5006,'2001-04-09',460),(1260,'CCCC800101',5009,'2001-07-28',631),(1270,'DDDD800101',5007,'2005-06-06',506),(1270,'DDDD800101',5008,'2003-01-21',546),(1280,'EEEE800101',5007,'1998-04-01',331),(1280,'EEEE800101',5008,'2002-03-23',107),(1290,'FFFF800101',5006,'2002-01-09',279),(1290,'FFFF800101',5009,'2003-06-10',132),(1300,'GGGG800101',5005,'2004-02-28',521),(1300,'GGGG800101',5010,'2001-02-10',119),(1310,'HHHH800101',5011,'2000-09-14',72),(1310,'HHHH800101',5019,'1998-05-27',199),(1320,'AAAA800101',5012,'1999-04-27',698),(1320,'AAAA800101',5018,'2002-06-23',413),(1330,'BBBB800101',5013,'2001-03-13',554),(1330,'BBBB800101',5017,'2006-06-10',93),(1340,'CCCC800101',5014,'1999-08-25',324),(1340,'CCCC800101',5016,'1997-05-11',674),(1350,'DDDD800101',5015,'1997-01-06',272),(1360,'EEEE800101',5014,'2000-02-04',265),(1360,'EEEE800101',5016,'1998-09-02',364),(1370,'FFFF800101',5013,'1997-12-03',575),(1370,'FFFF800101',5017,'1999-06-26',44),(1380,'GGGG800101',5012,'2005-12-05',645),(1380,'GGGG800101',5018,'2006-04-15',302),(1390,'HHHH800101',5011,'2003-02-16',697),(1390,'HHHH800101',5019,'2000-11-10',107),(1400,'AAAA800101',5000,'1999-04-07',382),(1400,'AAAA800101',5010,'2005-04-21',116),(1410,'BBBB800101',5001,'2000-05-18',601),(1410,'BBBB800101',5009,'2003-07-13',467),(1420,'CCCC800101',5002,'2001-09-09',603),(1420,'CCCC800101',5008,'1999-05-05',278),(1430,'DDDD800101',5003,'2005-04-30',576),(1430,'DDDD800101',5007,'2000-03-02',13);
/*!40000 ALTER TABLE `entregan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materiales` (
  `clave` int NOT NULL,
  `descripcion` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  `impuesto` float NOT NULL,
  `PorcentajeImpuesto` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`clave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES (1000,'Varilla 3/16',100,10,2.00),(1020,'Varilla 3/17',130,13,2.04),(1030,'Varilla 4/33',145,14.5,2.06),(1040,'Varilla 3/18',160,16,2.08),(1050,'Varilla 4/34',175,17.5,2.10),(1060,'Varilla 3/19',190,19,2.12),(1070,'Varilla 4/35',205,20.5,2.14),(1080,'Ladrillos rojos',50,5,2.16),(1090,'Ladrillos grises',35,3.5,2.18),(1100,'Block',30,3,2.20),(1110,'Megablock',40,4,2.22),(1120,'Sillar rosa',100,10,2.24),(1130,'Sillar gris',110,11,2.26),(1140,'Cantera blanca',200,20,2.28),(1150,'Cantera gris',1210,121,2.30),(1160,'Cantera rosa',1420,142,2.32),(1170,'Cantera amarilla',230,23,2.34),(1180,'Recubrimiento P1001',200,20,2.36),(1190,'Recubrimiento P1010',220,22,2.38),(1200,'Recubrimiento P1019',240,24,2.40),(1210,'Recubrimiento P1028',250,25,2.42),(1220,'Recubrimiento P1037',280,28,2.44),(1230,'Cemento ',300,30,2.46),(1240,'Arena',200,20,2.48),(1250,'Grava',100,10,2.50),(1260,'Gravilla',90,9,2.52),(1270,'Tezontle',80,8,2.54),(1280,'Tepetate',34,3.4,2.56),(1290,'Tubería 3.5',200,20,2.58),(1300,'Tubería 4.3',210,21,2.60),(1310,'Tubería 3.6',220,22,2.62),(1320,'Tubería 4.4',230,23,2.64),(1330,'Tubería 3.7',240,24,2.66),(1340,'Tubería 4.5',250,25,2.68),(1350,'Tubería 3.8',260,26,2.70),(1360,'Pintura C1010',125,12.5,2.72),(1370,'Pintura B1020',125,12.5,2.74),(1380,'Pintura C1011',725,72.5,2.76),(1390,'Pintura B1021',125,12.5,2.78),(1400,'Pintura C1011',125,12.5,2.80),(1410,'Pintura B1021',125,12.5,2.82),(1420,'Pintura C1012',125,12.5,2.84),(1430,'Pintura B1022',125,12.5,2.86),(2000,'Jabón',125,12.5,4.00),(2010,'Impermeabilizante',340,11,NULL),(2020,'Baldosa',240,12,NULL),(2030,'Adhesivos',140,12,NULL),(2040,'Selladores',100,4,NULL),(2050,'Vidrio',110,20,NULL),(3000,'cosa',23,23,23.00),(3100,'cosa2',277,23,23.00);
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `registarBitacora` AFTER INSERT ON `materiales` FOR EACH ROW BEGIN
    INSERT INTO Bitacora (idBitacora, operacion, idClave, Fecha)
    VALUES (DEFAULT, 'Alta material', NEW.clave, NOW());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `materiales_descripcion_si`
--

DROP TABLE IF EXISTS `materiales_descripcion_si`;
/*!50001 DROP VIEW IF EXISTS `materiales_descripcion_si`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `materiales_descripcion_si` AS SELECT 
 1 AS `clave`,
 1 AS `descripcion`,
 1 AS `precio`,
 1 AS `impuesto`,
 1 AS `PorcentajeImpuesto`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `materiales_entregados_2000`
--

DROP TABLE IF EXISTS `materiales_entregados_2000`;
/*!50001 DROP VIEW IF EXISTS `materiales_entregados_2000`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `materiales_entregados_2000` AS SELECT 
 1 AS `descripcion`,
 1 AS `fecha`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `rfc` varchar(15) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  `razonsocial` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`rfc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES ('AAAA800101','La fragua'),('BBBB800101','Oviedo'),('CCCC800101','La Ferre'),('DDDD800101','Cecoferre'),('EEEE800101','Alvin'),('FFFF800101','Comex'),('GGGG800101','Tabiquera del centro'),('HHHH800101','Tubasa'),('VAGO7809011','proveedor Vag');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `proveedores_educandoencoahuila`
--

DROP TABLE IF EXISTS `proveedores_educandoencoahuila`;
/*!50001 DROP VIEW IF EXISTS `proveedores_educandoencoahuila`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `proveedores_educandoencoahuila` AS SELECT 
 1 AS `denominacion`,
 1 AS `RFC`,
 1 AS `razonsocial`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `proveedores_televisaenacción`
--

DROP TABLE IF EXISTS `proveedores_televisaenacción`;
/*!50001 DROP VIEW IF EXISTS `proveedores_televisaenacción`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `proveedores_televisaenacción` AS SELECT 
 1 AS `denominacion`,
 1 AS `RFC`,
 1 AS `razonsocial`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyectos` (
  `numero` int NOT NULL,
  `denominacion` varchar(40) CHARACTER SET utf8mb3 COLLATE utf8mb3_spanish2_ci NOT NULL,
  PRIMARY KEY (`numero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (5000,'Vamos Mexico'),(5001,'Aztecon'),(5002,'CIT Campeche'),(5003,'Mexico sin ti no estamos completos'),(5004,'Educando en Coahuila'),(5005,'Infonavit Durango'),(5006,'Reconstrucción del templo de Guadalupe'),(5007,'Construcción de plaza Magnolias'),(5008,'Televisa en acción'),(5009,'Disco Atlantic'),(5010,'Construcción de Hospital Infantil'),(5011,'Remodelación de aulas del IPP'),(5012,'Restauración de instalaciones del CEA'),(5013,'Reparación de la plaza Sonora'),(5014,'Remodelación de Soriana'),(5015,'CIT Yucatan'),(5016,'Ampliación de la carretera a la huasteca'),(5017,'Reparación de la carretera del sol'),(5018,'Tu cambio por la educación'),(5019,'Queretaro limpio');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `rfc_entregan_a_d`
--

DROP TABLE IF EXISTS `rfc_entregan_a_d`;
/*!50001 DROP VIEW IF EXISTS `rfc_entregan_a_d`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `rfc_entregan_a_d` AS SELECT 
 1 AS `RFC`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `rfc_entregan_no_a`
--

DROP TABLE IF EXISTS `rfc_entregan_no_a`;
/*!50001 DROP VIEW IF EXISTS `rfc_entregan_no_a`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `rfc_entregan_no_a` AS SELECT 
 1 AS `RFC`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `ventas_2001`
--

DROP TABLE IF EXISTS `ventas_2001`;
/*!50001 DROP VIEW IF EXISTS `ventas_2001`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `ventas_2001` AS SELECT 
 1 AS `Clave`,
 1 AS `TotalVentas`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'lab20materiales'
--

--
-- Dumping routines for database 'lab20materiales'
--
/*!50003 DROP FUNCTION IF EXISTS `consultaTotalRegistros` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `consultaTotalRegistros`() RETURNS int
    READS SQL DATA
BEGIN
    DECLARE total INT;
    SET total = (SELECT COUNT(*) FROM lab20materiales.materiales);
    RETURN total;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `eliminarMaterial` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarMaterial`(
    IN uclave INT
)
BEGIN
    DELETE FROM materiales
    WHERE clave = uclave;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `descripciones_entregadas_2000`
--

/*!50001 DROP VIEW IF EXISTS `descripciones_entregadas_2000`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `descripciones_entregadas_2000` AS select distinct `m`.`descripcion` AS `descripcion`,`e`.`fecha` AS `fecha` from (`entregan` `e` join `materiales` `m`) where ((`e`.`clave` = `m`.`clave`) and (year(`e`.`fecha`) = 2000)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `materiales_descripcion_si`
--

/*!50001 DROP VIEW IF EXISTS `materiales_descripcion_si`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `materiales_descripcion_si` AS select `materiales`.`clave` AS `clave`,`materiales`.`descripcion` AS `descripcion`,`materiales`.`precio` AS `precio`,`materiales`.`impuesto` AS `impuesto`,`materiales`.`PorcentajeImpuesto` AS `PorcentajeImpuesto` from `materiales` where (`materiales`.`descripcion` like 'Si%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `materiales_entregados_2000`
--

/*!50001 DROP VIEW IF EXISTS `materiales_entregados_2000`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `materiales_entregados_2000` AS select distinct `m`.`descripcion` AS `descripcion`,`e`.`fecha` AS `fecha` from (`entregan` `e` join `materiales` `m`) where ((`e`.`clave` = `m`.`clave`) and (year(`e`.`fecha`) = 2000)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `proveedores_educandoencoahuila`
--

/*!50001 DROP VIEW IF EXISTS `proveedores_educandoencoahuila`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `proveedores_educandoencoahuila` AS select `pr`.`denominacion` AS `denominacion`,`e`.`rfc` AS `RFC`,`p`.`razonsocial` AS `razonsocial` from ((`proveedores` `p` join `entregan` `e`) join `proyectos` `pr`) where ((`p`.`rfc` = `e`.`rfc`) and (`pr`.`numero` = `e`.`numero`) and (`pr`.`denominacion` = 'Educando en Coahuila')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `proveedores_televisaenacción`
--

/*!50001 DROP VIEW IF EXISTS `proveedores_televisaenacción`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `proveedores_televisaenacción` AS select `pr`.`denominacion` AS `denominacion`,`e`.`rfc` AS `RFC`,`p`.`razonsocial` AS `razonsocial` from ((`proveedores` `p` join `entregan` `e`) join `proyectos` `pr`) where ((`p`.`rfc` = `e`.`rfc`) and (`pr`.`numero` = `e`.`numero`) and (`pr`.`denominacion` = 'Televisa en acción')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `rfc_entregan_a_d`
--

/*!50001 DROP VIEW IF EXISTS `rfc_entregan_a_d`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `rfc_entregan_a_d` AS select `entregan`.`rfc` AS `RFC` from `entregan` where (`entregan`.`rfc` like '[A-D]%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `rfc_entregan_no_a`
--

/*!50001 DROP VIEW IF EXISTS `rfc_entregan_no_a`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `rfc_entregan_no_a` AS select `entregan`.`rfc` AS `RFC` from `entregan` where (`entregan`.`rfc` like '[^A]%') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ventas_2001`
--

/*!50001 DROP VIEW IF EXISTS `ventas_2001`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ventas_2001` AS select `entregan`.`clave` AS `Clave`,sum(`entregan`.`cantidad`) AS `TotalVentas` from `entregan` where (year(`entregan`.`fecha`) = 2001) group by `entregan`.`clave` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15 10:15:45
