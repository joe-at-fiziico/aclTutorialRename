aclTutorial
===========

Q1. Why we don't need to DENY all permission on model Boss?

A1. The model Boss (inherit from User) already have default permission setting $owner.

Use StrongLoop API Explorer to help this tutorial.
To see the changes on the exposed api on these three models.

Q2. Try to use the api GET /bosses/{id} in explorer.
    Use mongodb viwer to get the value of 'id'.
    'id' is the _id of boss.    

A2. The access permission of the api GET /bosses/{id} is $owner so we need to login first to get the access_token.
    Find the api POST /bosses/login in explorer and fill below data 
    {
      "email" : "john@fiziico.com",
      "password" : "1234"
    }
    The value of field 'id' in response body is the access_token.
    Copy the value then paste to the text-input in right-top corner and click 'Set Access Token'.
    Try to access GET /bosses/{id} again!

Loopback ACL tutorial
