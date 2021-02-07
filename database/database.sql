CREATE TABLE Orders
(
    id            INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    createdAt     TIMESTAMP    NOT NULL,
    updatedAt     TIMESTAMP,

    transaction   INT          NOT NULL,
    user          VARCHAR(255) NOT NULL,
    value         FLOAT        NOT NULL,
    product       VARCHAR(255) NOT NULL,
    status        VARCHAR(255) NOT NULL,
    url           VARCHAR(255) DEFAULT NULL,
    paymentMethod VARCHAR(255) NOT NULL,
    userEmail     VARCHAR(255) NOT NULL,
    message       MEDIUMTEXT
);

CREATE TABLE Logs
(
    id        INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    createdAt TIMESTAMP    NOT NULL,
    updatedAt TIMESTAMP,

    type      VARCHAR(255) NOT NULL,
    route     VARCHAR(255) DEFAULT NULL,
    req       TEXT,
    headers   TEXT
);

CREATE TABLE Confirmations
(
    id          INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    createdAt   TIMESTAMP    NOT NULL,
    updatedAt   TIMESTAMP,

    song        VARCHAR(255) NOT NULL,
    guest       VARCHAR(255) NOT NULL UNIQUE,
    email       VARCHAR(255) NOT NULL,
    displayName VARCHAR(255) NOT NULL
);

CREATE TABLE States
(
    id           INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(255) NOT NULL,
    abbreviation VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Cities
(
    id      INT          NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name    VARCHAR(255) NOT NULL,
    stateId INT,
    FOREIGN KEY (stateId) REFERENCES States (id)
);