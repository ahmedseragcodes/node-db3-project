-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT P.ProductName, C.CategoryName FROM [PRODUCT] AS P
    JOIN [CATEGORY] AS C
    ON P.CategoryId = C.Id


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT O.ID, S.CompanyName FROM [ORDER] AS O
JOIN [SHIPPER] AS S
ON O.ShipVia = S.Id
WHERE O.ORDERDATE < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT P.ProductName, OD.QUANTITY FROM [ORDERDETAIL] AS OD
JOIN [PRODUCT] AS P
ON OD.ProductId = P.Id
WHERE OD.OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT O.ID, C.COMPANYNAME, E.LASTNAME FROM [ORDER] AS O
JOIN [CUSTOMER] AS C
ON O.CUSTOMERID = C.Id
JOIN [EMPLOYEE] AS E
ON O.EMPLOYEEID = E.ID