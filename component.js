angular.module('newApp').
  component('newList', { 
    template:
        '<ul>' +
          '<li ng-repeat="item in $ctrl.names">' +
            '<span>{{item.name}}</span>' +
            '<p>{{item.department}}</p>' +
          '</li>' +
        '</ul>',
    controller: function newListController() {
      this.names = [
        {
          name: 'Abirami S',
          department: 'Information Technology '
        }, {
          name: 'Jothilaxmi H',
          department: 'Chemical Engineering'
        }, {
          name: 'Mohasin S',
          department: 'Mechanical Engineering'
        }, {
            name: 'Dharshan S',
            department: 'Computer Science Engineering'
          }
      ];
    }
  });
