-- MySQL dump 10.16  Distrib 10.1.13-MariaDB, for Linux (i686)
--
-- Host: localhost    Database: Historia
-- ------------------------------------------------------
-- Server version	10.1.13-MariaDB

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
-- Table structure for table `Comentarios`
--

DROP TABLE IF EXISTS `Comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comentarios` (
  `NumeroDeComentario` int(11) NOT NULL AUTO_INCREMENT,
  `DescripcionComentario` varchar(200) NOT NULL,
  `UsuarioC` varchar(30) NOT NULL,
  `FechaComentario` date NOT NULL,
  `Nhistoria` int(11) NOT NULL,
  PRIMARY KEY (`NumeroDeComentario`),
  KEY `UsuarioC` (`UsuarioC`),
  KEY `Nhistoria` (`Nhistoria`),
  CONSTRAINT `Comentarios_ibfk_1` FOREIGN KEY (`UsuarioC`) REFERENCES `Usuarios` (`NombreUsuario`),
  CONSTRAINT `Comentarios_ibfk_2` FOREIGN KEY (`Nhistoria`) REFERENCES `historia` (`idHistoria`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentarios`
--

LOCK TABLES `Comentarios` WRITE;
/*!40000 ALTER TABLE `Comentarios` DISABLE KEYS */;
INSERT INTO `Comentarios` VALUES (36,'Marico que loco enserio?','Franco23','2020-03-08',19),(37,'Verga que arrecho seguro fue por la luz no?','aron23','2020-03-08',19);
/*!40000 ALTER TABLE `Comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `NombreUsuario` varchar(30) NOT NULL,
  `Contraseña` varchar(8) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellido` varchar(40) NOT NULL,
  `Edad` int(11) NOT NULL,
  `CorreoElectronico` varchar(40) NOT NULL,
  PRIMARY KEY (`NombreUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES ('aron23','feo123','Franco','Angel',18,'dfdfdf'),('Franco23','wwwaaa12','Franco','Angel',20,'aron23@gmail.com');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historia`
--

DROP TABLE IF EXISTS `historia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historia` (
  `idHistoria` int(11) NOT NULL AUTO_INCREMENT,
  `TituloHistoria` varchar(20) NOT NULL,
  `DescripcionBreve` varchar(25) NOT NULL,
  `TextoHistoria` text NOT NULL,
  `Fecha` date NOT NULL,
  `UsuarioCreador` varchar(30) NOT NULL,
  PRIMARY KEY (`idHistoria`),
  KEY `UsuarioCreador` (`UsuarioCreador`),
  CONSTRAINT `historia_ibfk_1` FOREIGN KEY (`UsuarioCreador`) REFERENCES `Usuarios` (`NombreUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historia`
--

LOCK TABLES `historia` WRITE;
/*!40000 ALTER TABLE `historia` DISABLE KEYS */;
INSERT INTO `historia` VALUES (19,'Aqui Con Franco','Que LOco','Tuvimos que venir a Ciudad Varina','2020-03-08','Franco23');
/*!40000 ALTER TABLE `historia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-08 17:55:36
