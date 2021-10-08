var viewModel = function() {
    var self=this;
    firstName = ko.observable("sunil"),
    lastName = ko.observable("kala"),
    fullName= ko.computed({
        read: function() {
        return self.firstName()+" "+ self.lastName();
    },
        write: function(val) {
            var arr = val.split(' ');
            self.firstName(arr[0]);
            self.lastName(arr[1]);

        }
    });
}
