--------------------------------------------------------
--  File created - Thursday-March-21-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence SEKV_PRIJ
--------------------------------------------------------

   CREATE SEQUENCE  "C##FPIS"."SEKV_PRIJ"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 61 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Sequence SEKV_PROM
--------------------------------------------------------

   CREATE SEQUENCE  "C##FPIS"."SEKV_PROM"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
--------------------------------------------------------
--  DDL for Table IZLOZBA
--------------------------------------------------------

  CREATE TABLE "C##FPIS"."IZLOZBA" 
   (	"ID_IZLOZBE" NUMBER, 
	"ID_MANIFESTACIJE" NUMBER, 
	"SLIKA" VARCHAR2(200 BYTE), 
	"UMETNIK" VARCHAR2(50 BYTE), 
	"VREME_OD" VARCHAR2(10 BYTE), 
	"VREME_DO" VARCHAR2(10 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table JE_NA
--------------------------------------------------------

  CREATE TABLE "C##FPIS"."JE_NA" 
   (	"ID_PRIJAVE" NUMBER, 
	"ID_MANIFESTACIJE" NUMBER
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table MANIFESTACIJA
--------------------------------------------------------

  CREATE TABLE "C##FPIS"."MANIFESTACIJA" 
   (	"ID_MANIFESTACIJE" NUMBER, 
	"NAZIV" VARCHAR2(20 BYTE), 
	"BROJ_PRIJAVLJENIH" NUMBER, 
	"DATUM_MANIFESTACIJE" DATE, 
	"CENA" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRIJAVA
--------------------------------------------------------

  CREATE TABLE "C##FPIS"."PRIJAVA" 
   (	"ID_PRIJAVE" NUMBER, 
	"DATUM_PRIJAVE" DATE, 
	"BROJ_LJUDI" NUMBER, 
	"SLIKARSTVO" NUMBER, 
	"FOTOGRAFIJE" NUMBER, 
	"IME" VARCHAR2(20 BYTE), 
	"PREZIME" VARCHAR2(20 BYTE), 
	"PROFESIJA" VARCHAR2(20 BYTE), 
	"ADRESA1" VARCHAR2(20 BYTE), 
	"ADRESA2" VARCHAR2(20 BYTE), 
	"PTT" NUMBER, 
	"MESTO" VARCHAR2(20 BYTE), 
	"DRZAVA" VARCHAR2(20 BYTE), 
	"EMAIL" VARCHAR2(30 BYTE), 
	"POTVRDA_EMAIL" VARCHAR2(30 BYTE), 
	"ID_PROMO_MOJ" VARCHAR2(7 BYTE), 
	"ID_PROMO_KORISTITI" VARCHAR2(7 BYTE), 
	"TOKEN" VARCHAR2(6 BYTE), 
	"CENA" NUMBER, 
	"ISKORISCEN_PROMO" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PROMO_KOD
--------------------------------------------------------

  CREATE TABLE "C##FPIS"."PROMO_KOD" 
   (	"KOD" VARCHAR2(7 BYTE), 
	"DATUM_NASTANKA" DATE, 
	"AKTIVAN" NUMBER(*,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into C##FPIS.IZLOZBA
SET DEFINE OFF;
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (1,1,'https://i0.wp.com/www.vujadinovic.com/wp-content/uploads/2022/06/Ambijent-Galerija-Vujadinovic-20220513_182141_1.jpg?ssl=1','Luka Todic','10:00','12:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (2,1,'https://i0.wp.com/www.vujadinovic.com/wp-content/uploads/2022/06/Ambijent-Galerija-Vujadinovic-20220401_195913_1.jpg?ssl=1','Andjela Copic','13:00','15:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (3,1,'https://artram.rs/wp-content/uploads/2021/02/ArtRam10.jpg','Stefan Arsic','16:00','18:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (4,1,'https://www.andricgrad.com/wp-content/uploads/2014/05/galerija-unutra-0.jpg','Janko Koroman','19:00','21:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (1,2,'https://contentadmin.vanartgallery.bc.ca/wp-content/uploads/2023/06/MAG_ConceptionsofWhite_036_1280px.jpg','Milica Ognjenovic','10:00','12:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (2,2,'https://cdn.photofunia.com/effects/black-white-gallery/examples/1eiywyg_o.jpg','Vasilije Uskokovic','13:00','15:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (3,2,'https://media.timeout.com/images/105304700/image.jpg','Dragana Savkic','16:00','18:00');
Insert into C##FPIS.IZLOZBA (ID_IZLOZBE,ID_MANIFESTACIJE,SLIKA,UMETNIK,VREME_OD,VREME_DO) values (4,2,'https://i0.wp.com/fraenkelgallery.com/wp-content/uploads/2019/07/LF-SIGNS-Install-View-3.jpg?resize=1380%2C776&quality=90&strip=all&ssl=1','Viktor Rosic','19:00','21:00');
REM INSERTING into C##FPIS.JE_NA
SET DEFINE OFF;
REM INSERTING into C##FPIS.MANIFESTACIJA
SET DEFINE OFF;
Insert into C##FPIS.MANIFESTACIJA (ID_MANIFESTACIJE,NAZIV,BROJ_PRIJAVLJENIH,DATUM_MANIFESTACIJE,CENA) values (1,'Slikarstvo',0,to_date('27-APR-24','DD-MON-RR'),2000);
Insert into C##FPIS.MANIFESTACIJA (ID_MANIFESTACIJE,NAZIV,BROJ_PRIJAVLJENIH,DATUM_MANIFESTACIJE,CENA) values (2,'Fotografije',5,to_date('28-APR-24','DD-MON-RR'),2000);
REM INSERTING into C##FPIS.PRIJAVA
SET DEFINE OFF;
Insert into C##FPIS.PRIJAVA (ID_PRIJAVE,DATUM_PRIJAVE,BROJ_LJUDI,SLIKARSTVO,FOTOGRAFIJE,IME,PREZIME,PROFESIJA,ADRESA1,ADRESA2,PTT,MESTO,DRZAVA,EMAIL,POTVRDA_EMAIL,ID_PROMO_MOJ,ID_PROMO_KORISTITI,TOKEN,CENA,ISKORISCEN_PROMO) values (52,to_date('13-MAR-24','DD-MON-RR'),1,1,0,'Nikola','Kadic','Student','Adresa','Adresa',34000,'Kragujevac','Srbija','nk@gmail.com','nk@gmail.com',null,null,null,1800,0);
Insert into C##FPIS.PRIJAVA (ID_PRIJAVE,DATUM_PRIJAVE,BROJ_LJUDI,SLIKARSTVO,FOTOGRAFIJE,IME,PREZIME,PROFESIJA,ADRESA1,ADRESA2,PTT,MESTO,DRZAVA,EMAIL,POTVRDA_EMAIL,ID_PROMO_MOJ,ID_PROMO_KORISTITI,TOKEN,CENA,ISKORISCEN_PROMO) values (51,to_date('21-MAR-24','DD-MON-RR'),5,0,1,'Nikola','Kadic','Student','Adresa',null,34000,'Kragujevac','Srbija','nk@gmail.com','nk@gmail.com','sxmojw',null,'pmjrlg',9500,0);
REM INSERTING into C##FPIS.PROMO_KOD
SET DEFINE OFF;
Insert into C##FPIS.PROMO_KOD (KOD,DATUM_NASTANKA,AKTIVAN) values ('qymjut',to_date('21-MAR-24','DD-MON-RR'),1);
Insert into C##FPIS.PROMO_KOD (KOD,DATUM_NASTANKA,AKTIVAN) values ('sxmojw',to_date('21-MAR-24','DD-MON-RR'),1);
--------------------------------------------------------
--  DDL for Index PJPRIJAVE
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##FPIS"."PJPRIJAVE" ON "C##FPIS"."PRIJAVA" ("ID_PRIJAVE") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PKIZL
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##FPIS"."PKIZL" ON "C##FPIS"."IZLOZBA" ("ID_IZLOZBE", "ID_MANIFESTACIJE") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PKMAN
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##FPIS"."PKMAN" ON "C##FPIS"."MANIFESTACIJA" ("ID_MANIFESTACIJE") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger AZURIRAJ_BROJ_MAN
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."AZURIRAJ_BROJ_MAN" 
AFTER UPDATE OF broj_ljudi
ON prijava
FOR EACH ROW

BEGIN
  IF :NEW.slikarstvo = 1 AND :NEW.fotografije = 1 THEN
    UPDATE manifestacija
    SET broj_prijavljenih= broj_prijavljenih + (:NEW.broj_ljudi - :OLD.broj_ljudi)
    WHERE id_manifestacije=1;

    UPDATE manifestacija
    SET broj_prijavljenih= broj_prijavljenih + (:NEW.broj_ljudi - :OLD.broj_ljudi)
    WHERE id_manifestacije=2;

  ELSE
    IF :NEW.slikarstvo = 1 AND :NEW.fotografije = 0 THEN
      UPDATE manifestacija
    SET broj_prijavljenih= broj_prijavljenih + (:NEW.broj_ljudi - :OLD.broj_ljudi)
    WHERE id_manifestacije=1;

    ELSE
      UPDATE manifestacija
    SET broj_prijavljenih= broj_prijavljenih + (:NEW.broj_ljudi - :OLD.broj_ljudi)
    WHERE id_manifestacije=2;

    END IF;

  END IF;
END;
/
ALTER TRIGGER "C##FPIS"."AZURIRAJ_BROJ_MAN" ENABLE;
--------------------------------------------------------
--  DDL for Trigger AZURIRAJ_POPUST_NA_OBA
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."AZURIRAJ_POPUST_NA_OBA" 
BEFORE UPDATE OF slikarstvo, fotografije,broj_ljudi
ON prijava
FOR EACH ROW
BEGIN

IF :NEW.slikarstvo = 0 AND :NEW.fotografije = 0 THEN

    UPDATE promo_kod
    SET aktivan = 0
    WHERE kod = :NEW.ID_PROMO_MOJ;
    :NEW.token := NULL;
    :NEW.email := NULL;
 
  ELSE
  IF :NEW.slikarstvo = 1 AND :NEW.fotografije = 1 THEN
     :NEW.cena := ((pck1.globalna * 2) - ((pck1.globalna * 2) * 0.1)) - (((pck1.globalna * 2) - ((pck1.globalna * 2) * 0.1)) * :NEW.ISKORISCEN_PROMO);
  ELSE
   :NEW.cena := pck1.globalna - (pck1.globalna * :NEW.ISKORISCEN_PROMO);
  END IF;
  IF :NEW.broj_ljudi > 2 THEN :NEW.cena := :NEW.cena - (:NEW.cena * (:NEW.broj_ljudi / 100));
  END IF;
END IF;
END;
/
ALTER TRIGGER "C##FPIS"."AZURIRAJ_POPUST_NA_OBA" ENABLE;
--------------------------------------------------------
--  DDL for Trigger AZURIRAJ_PRIJAVU
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."AZURIRAJ_PRIJAVU" 
BEFORE UPDATE OF slikarstvo,fotografije,broj_ljudi ON prijava
FOR EACH ROW
BEGIN
  IF TRUNC(:NEW.DATUM_PRIJAVE) < TO_DATE('15-MAR-24', 'DD-MON-YY') THEN 
    pck1.globalna := (:NEW.broj_ljudi * 2000) - ((:NEW.broj_ljudi * 2000) * 0.1);
  ELSE 
    pck1.globalna := :NEW.broj_ljudi * 2000;
  END IF;
END;
/
ALTER TRIGGER "C##FPIS"."AZURIRAJ_PRIJAVU" ENABLE;
--------------------------------------------------------
--  DDL for Trigger DODAJ_PRIJAVU
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."DODAJ_PRIJAVU" 
BEFORE INSERT ON prijava
FOR EACH ROW
DECLARE
v_kod NUMBER;
BEGIN
  IF TRUNC(:NEW.DATUM_PRIJAVE) < TO_DATE('15-MAR-24', 'DD-MON-YY') THEN 
    pck1.globalna := (:NEW.broj_ljudi * 2000) - ((:NEW.broj_ljudi * 2000) * 0.1);
    :NEW.cena := (:NEW.broj_ljudi * 2000) - ((:NEW.broj_ljudi * 2000) * 0.1);
  ELSE 
    pck1.globalna := :NEW.broj_ljudi * 2000;
  END IF;
 
END;
/
ALTER TRIGGER "C##FPIS"."DODAJ_PRIJAVU" ENABLE;
--------------------------------------------------------
--  DDL for Trigger DODAJ_PROMO
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."DODAJ_PROMO" 
BEFORE INSERT ON prijava
FOR EACH ROW
DECLARE
  v_kod_exists NUMBER;
BEGIN
  SELECT COUNT(*)
  INTO v_kod_exists
  FROM promo_kod
  WHERE kod = :NEW.ID_PROMO_KORISTITI AND aktivan = 1;

  IF v_kod_exists > 0 THEN
    :NEW.ISKORISCEN_PROMO := 0.05;

    UPDATE promo_kod
    SET aktivan = 0
    WHERE kod = :NEW.ID_PROMO_KORISTITI;
    :NEW.cena := :NEW.cena - (:NEW.cena * 0.05);
     ELSE
    :NEW.ISKORISCEN_PROMO := 0;
  END IF;
END;
/
ALTER TRIGGER "C##FPIS"."DODAJ_PROMO" ENABLE;
--------------------------------------------------------
--  DDL for Trigger PRIJAVA_TRG
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##FPIS"."PRIJAVA_TRG" 
BEFORE INSERT ON PRIJAVA 
FOR EACH ROW 
BEGIN
  <<COLUMN_SEQUENCES>>
  BEGIN
    IF INSERTING AND :NEW.ID_PRIJAVE IS NULL THEN
      SELECT SEKV_PRIJ.NEXTVAL INTO :NEW.ID_PRIJAVE FROM SYS.DUAL;
    END IF;
  END COLUMN_SEQUENCES;
END;
/
ALTER TRIGGER "C##FPIS"."PRIJAVA_TRG" ENABLE;
--------------------------------------------------------
--  DDL for Package PCK1
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE PACKAGE "C##FPIS"."PCK1" as globalna number; end;

/
--------------------------------------------------------
--  Constraints for Table PRIJAVA
--------------------------------------------------------

  ALTER TABLE "C##FPIS"."PRIJAVA" ADD CONSTRAINT "PRIJAVACHK" CHECK (broj_ljudi BETWEEN 1 AND 5) ENABLE;
  ALTER TABLE "C##FPIS"."PRIJAVA" ADD CONSTRAINT "PJPRIJAVE" PRIMARY KEY ("ID_PRIJAVE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table IZLOZBA
--------------------------------------------------------

  ALTER TABLE "C##FPIS"."IZLOZBA" ADD CONSTRAINT "PKIZL" PRIMARY KEY ("ID_IZLOZBE", "ID_MANIFESTACIJE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table MANIFESTACIJA
--------------------------------------------------------

  ALTER TABLE "C##FPIS"."MANIFESTACIJA" ADD CONSTRAINT "BROJPRIJAVLJENIH" CHECK (broj_prijavljenih BETWEEN 0 AND 15) ENABLE;
  ALTER TABLE "C##FPIS"."MANIFESTACIJA" ADD CONSTRAINT "PKMAN" PRIMARY KEY ("ID_MANIFESTACIJE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table IZLOZBA
--------------------------------------------------------

  ALTER TABLE "C##FPIS"."IZLOZBA" ADD CONSTRAINT "FKIZL" FOREIGN KEY ("ID_MANIFESTACIJE")
	  REFERENCES "C##FPIS"."MANIFESTACIJA" ("ID_MANIFESTACIJE") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table JE_NA
--------------------------------------------------------

  ALTER TABLE "C##FPIS"."JE_NA" ADD FOREIGN KEY ("ID_PRIJAVE")
	  REFERENCES "C##FPIS"."PRIJAVA" ("ID_PRIJAVE") ENABLE;
  ALTER TABLE "C##FPIS"."JE_NA" ADD FOREIGN KEY ("ID_MANIFESTACIJE")
	  REFERENCES "C##FPIS"."MANIFESTACIJA" ("ID_MANIFESTACIJE") ENABLE;
