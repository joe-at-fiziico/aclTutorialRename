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

Q3. Try to access the relation model api 'GET /bosses/{id}/chainStores/{fk}'.
    Remember to set access token.
    Use mongodb viwer to get the value of 'id' and 'fk'.
    'fk' is the _id of chainStore.

A3. In order to use the relation model api we need to explicit declare the acl.
    Click on the link 'GET /bosses/{id}/chainStores/{fk}' on explorer and the url bar in browser can find the string 'bosses/prototype_findById_chainStores', use the string to define the acl.
    Remember to restart loopback appilication apply the new setting of acl.

Loopback ACL tutorial
