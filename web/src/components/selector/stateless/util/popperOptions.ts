export default (isOpen: boolean) => (
  isOpen ? ({
    modifiers: [ {
      name: "eventListeners", 
      enabled: true, 
    }, {
      name: "offset", 
      options: { offset: [ 0, 10 ] }
    }, { 
      name: 'preventOverflow', 
      options: { mainAxis: true, altAxis: true } 
    }]
  }) : ({ 
    modifers: [] 
  })
);