const MOTD = "You will obey or molten silver will be poured into your ears."
const MODULES = [
  [{
    type: "status",
    icon: 'wifi-tethering',
    title: "Connection",
    subtext: "Ping 80ms",
    status: 1
  }],
  [{
    type: "status",
    icon: 'storage',
    title: "Temperature",
    subtext: "Warning!",
    status: 2
  }],
  [{
    type: "status",
    icon: 'cloud',
    title: "Backup",
    subtext: "More than 7 days old",
    status: 3
  }],
  [{
    type: "status",
    icon: 'backup',
    title: "Update",
    subtext: "Unknown status",
    status: 0
  }],
  [{
    type: "text",
    icon: 'weekend',
    title: "Message of the day",
    subtext: MOTD
  }],

  [{
    type: "text",
    icon: 'theaters',
    title: "JoJo's Bizzare Adventure: Stardust Crusaders: A Man Possessed by ...",
  }, {
    type: "progress",
    // icon: 'flight-takeoff',
    title: "02:10 / 23:32"
  }],

  [{
    type: "text",
    icon: 'check-circle',
    title: "Short Text",
    subtext: "Lorem ipsum dolor sit amet."
  }],

  [{
    type: "switch",
    icon: 'settings-backup-restore',
    title: "Auto Backup"
  }],
  [{
    type: "slider",
    icon: 'volume-up'
  }],
  [{
    type: "slider",
    icon: 'brightness-high'
  }],

  [{
    type: "buttons",
    buttons: [
      {icon: 'settings-power'},
    ]
  }],
  [{
    type: "buttons",
    buttons: [
      {icon: 'extension'},
      {icon: 'gps-fixed'},
    ]
  }],
  [{
    type: "buttons",
    buttons: [
      {icon: 'volume-up'},
      {icon: 'volume-mute'},
      {icon: 'volume-down'}
    ]
  }],
  [{
    type: "buttons",
    buttons: [
      {icon: 'storage'},
      {icon: 'wifi-tethering'},
      {icon: 'vpn-key'},
      {icon: 'build'}
    ]
  }],
];

module.exports = {
  modules: MODULES
}
