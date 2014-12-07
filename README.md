aclTutorial
===========

Q1. Why we don't need to DENY all permission on model Boss?

A1. The model Boss (inherit from User) already have default permission setting $owner.

Use StrongLoop API Explorer to help this tutorial.
To see the changes on the exposed api on these three models.

Q2. Try to use the api GET /bosses/{id} in explorer.
    Use mongodb viwer to get the value of 'id'.
    'id' is the _id of boss.    

Loopback ACL tutorial
