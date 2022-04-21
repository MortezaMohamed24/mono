export const format = (number: number) => (
  number.toString().slice(0, 2).padStart(2, "0")
);

export const popperOptions = () => ({
  modifiers: [ 
    {name: "eventListeners", enabled: true},
    {name: "offset", options: {offset: [0, 10]}}, 
    {name: 'preventOverflow', options: {mainAxis: true, altAxis: true}},
  ],
});
