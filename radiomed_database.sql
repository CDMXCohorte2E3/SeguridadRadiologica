-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: radiomed_database
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idAdministrador` int NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Contrasena` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAdministrador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Leticia Somera','radiomed.asesores@gmail.com','RadioMed_01'),(2,'David Vargas','radiomed.contacto@gmail.com','RadioMed_01');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` int NOT NULL,
  `Nombre` varchar(150) DEFAULT NULL,
  `Marca` varchar(45) DEFAULT NULL,
  `Modelo` varchar(45) DEFAULT NULL,
  `Precio` varchar(8) DEFAULT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Imagen` varchar(150) DEFAULT NULL,
  `Categoria` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Mandil emplomado económico','Marca Slim Royal','E6995','121 USD','0.5 mm de plomo | 66x95cm | Con bolsillo | Acabado textil','.\\img\\products\\img-product1.jpg','Mandiles'),(2,'Mandil emplomado estándar','Marca Slim Royal','S6995','186 USD','0.5 mm de plomo | 66x95cm | Con bolsillo | acabado plástico','.\\img\\products\\img-product2.jpg','Mandiles'),(3,'Faldón emplomado','Marca Slim Royal','SQUARE','70 USD','0.5 mm de plomo | 40x40cm | Tipo falda','.\\img\\products\\img-product3.jpg','Mandiles'),(4,'Lentes emplomados','Marca Slim Royal','SS-53','137 USD',' 0.75 mm de plomo | Con estuche','.\\img\\products\\img-product4.jpg','Lentes'),(5,'Lentes emplomados','Marca Slim Royal','S-53','118 USD',' 0.5 mm de plomo | Con estuche','.\\img\\products\\img-product5.jpg','Lentes'),(6,'Googles emplomados','Marca Slim Royal','GOOGLE-HO','116 USD',' 0.5 mm de plomo | Con bolsa de tela','.\\img\\products\\img-product6.jpg','Lentes'),(7,'Guantes emplomados','Marca Slim Royal','100 M/L','133 USD',' 0.5 mm de plomo | 350 mm de largo | Tamaño mediano o grande','.\\img\\products\\img-product7.jpg','Guantes'),(8,'Guantes emplomados','Marca Shielding','XR47','43 USD',' Modelo RADIAXON | Equivalente a 0.5 mm de plomo | Solo bajo pedido','.\\img\\products\\img-product8.jpg','Guantes'),(9,'Collarín emplomado','Marca Slim Royal','STANDARD-05','41 USD',' 0.5 mm de plomo','.\\img\\products\\img-product9.jpg','Collarines'),(10,'Collarín emplomado de lujo','Marca Slim Royal','DELUX-05','54 USD',' 0.5 mm de plomo','.\\img\\products\\img-product10.jpg','Collarines'),(11,'Protectores de gónadas','Marca Slim Royal','S806A','135 USD','0.5 mm de plomo | Juego de 3 protectores: | grande, mediano y chico','.\\img\\products\\img-product11.jpg','Protectores de gónadas'),(12,'Protectores de gónadas','Marca Slim Royal','S806 M/L','37 USD',' 0.5mm de plomo | Una pieza | Tamaño mediano o grande','.\\img\\products\\img-product12.jpg','Protectores de gónadas');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idServicio` int NOT NULL,
  `Nombre` varchar(200) DEFAULT NULL,
  `ParrafoIntroductorio` varchar(300) DEFAULT NULL,
  `ParrafoDos` varchar(300) DEFAULT NULL,
  `ParrafoTres` varchar(300) DEFAULT NULL,
  `ParrafoResaltado` varchar(300) DEFAULT NULL,
  `Imagen` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idServicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'Curso Básico de Protección Radiológica Nivel Personal Ocupacionalmente Expuesto (POE)','Curso dirigido a técnicos radiólogos, médicos radiólogos, enfermeras, cirujanos dentistas, médicos de diferentes especialidades y cualquier personal ocupacionalmente expuesto (POE) que haga uso de algún equipo de rayos X para diagnóstico médico.','Este curso está diseñado para que el alumno comprenda fácilmente y de forma didáctica qué son las radiaciones ionizantes y cuáles son los principios de protección radiológica que puede aplicar en su lugar de trabajo.','El contenido del curso se basa en lo estipulado en las Normas Oficiales Mexicanas NOM-229-SSA1-2002 y NOM-031-NUCL-2011.','Duración del curso: 40 horas','.\\img\\products\\Img-service1.jpg'),(2,'Curso dirigido al personal ocupacionalmente expuesto (POE) que labora en establecimientos de diagnóstico médico con rayos X y cuenta con un Curso Básico de Protección Radiológica Nivel POE.','Curso dirigido al personal ocupacionalmente expuesto (POE) que labora en establecimientos de diagnóstico médico con rayos X y cuenta con un Curso Básico de Protección Radiológica Nivel POE.','RadioMed le ofrece un Curso de Actualización personalizado, de acuerdo al tipo de establecimiento médico que lo solicita, con el fin de reforzar en el alumno los conocimientos prácticos de protección radiológica que le serán útiles en sus actividades laborales diarias.','El Curso de Actualización se imparte de forma anual de acuerdo a lo establecido en las Normas Oficiales Mexicanas NOM-229-SSA1-200 y NOM-031-NUCL-2011.','Duración del curso: 8 a 16 horas','.\\img\\products\\Img-service2.jpg'),(3,'Dosimetría Personal OSL','La dosimetría personal más moderna y precisa del mercado a un precio accesible.','Tecnología alemana BeOSL, ampliamente conocida y utilizada en países como Italia, Japón, Suiza, Bélgica, EUA y muchos más. ',' Nuestro servicio está avalado por la Comisión Nacional de Seguridad Nuclear y Salvaguardias (CNSNS) mediante el Programa Permanente de Supervisión de Servicios de Dosimetría (PPSSD). ','¡Pregunte por nuestros descuentos y proporcione dosimetría de calidad a todo su personal! ','.\\img\\products\\Img-service3.jpg'),(4,'Gestoría ante la COFEPRIS ','Lo apoyamos en la obtención de su Licencia Sanitaria y Permiso del Responsable de la Operación y el funcionamiento. Nuestro servicio está garantizado. ',' ',' ','Le proporcionamos Manuales de Protección Radiológica y Garantía de Calidad personalizados, de acuerdo a las necesidades de su establecimiento, todo con base en lo requerido por la Norma Oficial Mexicana NOM-229-SSA1-2002.','.\\img\\products\\Img-service4.jpg'),(5,'Memoria Analítica','Cálculo de blindajes para su sala de rayos X.','Evite gastos innecesarios, le indicamos la forma más efectiva de blindar su sala cumpliendo con la norma mexicana y cuidando su presupuesto.','Adecuamos completamente su sala de rayos X, pregunte por nuestro servicio de blindaje de salas, manejamos plomo y barita.','Le proporcionamos un certificado con validez oficial ante la COFEPRIS.','.\\img\\products\\Img-service6.jpg'),(6,'Levantamiento de niveles ','Verificación de los blindajes de su sala de rayos X','Las puebas se realizan con detector de radiación tipo cámara de ionización como lo establece la Norma Oficial Mexicana NOM-229-SSA1-2002.',' ','Le proporcionamos un certificado con validez oficial ante la COFEPRIS.','.\\img\\products\\Img-service6.jpg'),(7,'Control de Calidad para Equipos de Diagnóstico Médico con Rayos X ','Somos Asesores Especializados en Seguridad Radiológica avalados por la COFEPRIS. Lo ayudamos a cumplir con el Programa de Garantía de Calidad solicitado por la Norma Oficial Mexicana NOM-229-SSA1-2002.','Realizamos pruebas de control de calidad a sus equipos de rayos X convencionales, tomógrafos, mastógrafos, rayos X dentales, fluoroscopía, etc.','Utilizamos equipos y sensores de última generación para asegurar la protección del POE y de sus pacientes. ','Nuestros certificados de pruebas de control de calidad tienen validez oficial ante la COFEPRIS.','.\\img\\products\\Img-service7.jpg'),(8,'Auditoría interna en protección radiológica','Visitamos su establecimiento para evaluar las condiciones generales de protección radiológica en su sala de rayos X, con base en los requerimientos de la Norma Oficial Mexicana NOM-229-SSA1-2002','Se realiza una revisión a su expediente de seguridad radiológica y se entrega un dictamen con la evaluación de su sala, indicando los puntos que deben atenderse para cumplir con lo establecido por la COFEPRIS.','','Incluye una plática orientativa sobre el Programa de Garantía de Calidad establecido en la Norma Oficial Mexicana NOM-229-SSA1-2002.','.\\img\\products\\Img-service8.jpg'),(9,'Señalamientos de protección radiológica','Le proporcionamos los señalamientos de protección radiológica necesarios para su establecimiento de diagnóstico médico. ',' ','','Nuestros señalamientos cumplen con los estándares exigidos por la Norma Oficial Mexicana NOM-229-SSA1-2002.','.\\img\\products\\Img-service9.jpg');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Usuariocol` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Contrasena` varchar(45) DEFAULT NULL,
  `Teléfono` varchar(15) DEFAULT NULL,
  `Direccion` varchar(200) DEFAULT NULL,
  `Empresa` varchar(30) DEFAULT NULL,
  `RazonSocial` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'radiomed_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-18 11:47:18
