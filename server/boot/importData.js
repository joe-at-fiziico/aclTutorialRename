module.exports = function importData(app) {

  var 
    Boss = app.models.boss,
    ChainStore = app.models.chainStore,
    Employee = app.models.employee;

    Boss.findOrCreate({
        where : { 
            name : 'john'
        }      
    },
    {
        name : 'john',
        email: 'john@fiziico.com',
        password: '1234'
    }, function (err, boss) {
        if (err) {
            return console.log(err);
        }
        ChainStore.findOrCreate({
            where : { 
                name : 'chainStore1'
            }      
        },
        {
            name : 'chainStore1',
            id_boss : boss.id
        }, function (err, chainStore) {
            if (err) {
                return console.log(err);
            }
        });        
    });
};
