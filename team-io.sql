
CREATE TABLE IF NOT EXISTS `User` (
  `idUser` VARCHAR(45) NOT NULL,
  `Name` VARCHAR(60) NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tickets` (
  `idticket` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `User_idUser` VARCHAR(45) NOT NULL,
  `body` VARCHAR(255) NULL,
  `lane` INT NOT NULL,
  PRIMARY KEY (`idticket`, `User_idUser`),
  INDEX `fk_tickets_User_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_tickets_User`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

