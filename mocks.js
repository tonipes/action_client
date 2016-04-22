const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const MODULES = [
  [{type: "status",    icon: 'stars',        title: "Status 1", subtext: "All Good!",  status: 1}],
  [{type: "status",    icon: 'today',        title: "Status 2", subtext: "Warning!",   status: 2}],
  [{type: "status",    icon: 'cloud',         title: "Status 3", subtext: "Critical!",  status: 3}],
  [{type: "status",    icon: 'settings',     title: "Status 0", subtext: "Unknown!",   status: 0}],
  [{type: "text",      icon: 'favorite',     title: "Long Text",  subtext: LOREM}],

  [{type: "text",     icon: 'favorite',     title: "Just an Title",},
  {type: "progress",  icon: 'flight-takeoff', title: "02:10 / 23:32"}],

  [{type: "text",      icon: 'check-circle', title: "Short Text", subtext: "Lorem ipsum dolor sit amet."}],

  [{type: "switch",    icon: 'dns', title: "Checkbox"}],
  [{type: "slider",    icon: 'volume-up'}],
  [{type: "slider",    icon: 'brightness-high'}],

  [{type: "buttons",  buttons:[
    { icon: 'settings-power' },

  ]}],
  [{type: "buttons",  buttons:[
    { icon: 'extension' },
    { icon: 'gps-fixed' },
  ]}],
  [{type: "buttons",  buttons:[
    { icon: 'volume-up' },
    { icon: 'volume-mute' },
    { icon: 'volume-down' }
  ]}],
  [{type: "buttons",  buttons:[
    { icon: 'storage' },
    { icon: 'wifi-tethering' },
    { icon: 'vpn-key' },
    { icon: 'build' }
  ]}],
];

module.exports = {
  modules: MODULES
}
