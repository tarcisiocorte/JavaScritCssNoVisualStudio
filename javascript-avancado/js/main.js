var list = [
        {"desc":"rice", "amount": "1", "value": "5.4"},
        {"desc":"beer", "amount": "1", "value": "7.4"},
        {"desc":"meat", "amount": "1", "value": "15.3"},        
    ];

    function getTotal(list) {
        var total = 0;
        for(var key in list)
        {
            total += list[key].value * list[key].amount;
        }

        return total;
    }

    console.log(getTotal(list));