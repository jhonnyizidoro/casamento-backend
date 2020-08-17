## Casamento Backend

Api para processamento de pagamentos.

### DB Script
```
CREATE TABLE Orders (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    transaction INT NOT NULL,
    user VARCHAR(255) NOT NULL,
    value FLOAT NOT NULL,
    product VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);
```