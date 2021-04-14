-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT P.ProductName, C.CategoryName FROM [PRODUCT] AS P
JOIN [CATEGORY] AS C
ON P.CATEGORYID = C.ID
ORDER BY C.CategoryName ASC

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT O.ID, O.OrderDate, S.CompanyName FROM [ORDER] AS O
JOIN [SHIPPER] AS S
ON O.ShipVia = S.Id
WHERE OrderDate < "2012-08-09"



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT 
P.ProductName, COUNT(P.ProductName) AS "Total Orders", P.QuantityPerUnit, O.ID OrderID FROM [PRODUCT] AS P
JOIN [ORDER] AS O
WHERE O.ID = 10251
GROUP BY PRODUCTNAME

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id OrderId, c.CompanyName, o.EmployeeId, e.lastname from [order] as o
join customer as c
on o.customerid = c.id
join employee as e
on o.employeeid = e.id