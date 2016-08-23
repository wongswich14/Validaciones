    var Validations = {
        Numbers: function (n) { return (/^[0-9]+$/).test(n); },
        Decimals: function (n) { return (/^[0-9]+(\.{1}[0-9]{2})?$/).test(n); },
        Email: function (d) { return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(d); },
        EmailResorts: function (d) { return (/^\w+([\.-]?\w+)*@(hyatt|playaresorts|realresorts){1}([\.-]?\w+)*(\.\w{2,3})+$/).test(d); },
        UpperCase: function (d) { return (/^[A-Z]+$/).test(d); },
        LowerCase: function (d) { return (/^[a-z]+$/).test(d); },
        MinLength: function (d) { retunr(/^\d{6}$/).test(d); },
        MaxLength: function (d) { return (/^\d{12}$/).test(d); },
        Password: function (str) { }

    };
