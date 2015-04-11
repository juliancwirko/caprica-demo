'use strict';

Meteor.startup(function () {

    Cylon.robot({
        name: 'Number Six',
        description: 'Number Six is a humanoid Cylon who plays several key roles in Cylon society. Number Sixes are typically sensual and use seduction in infiltration.',

        // you need to have connection with Arduino board to run this demo app
        // or you can comment connections and devices and references in functions
        // connections: {
        //   arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
        // },

        // devices: {
        //   redLed: { driver: 'led', pin: 13 },
        //   yellowLed: { driver: 'led', pin: 12 }
        // },

        redLed: function () {
            // this.devices.redLed.toggle();
            return 'Cylon ' + this.name + ' toggles red led';
        },

        yellowLed: function () {
            // this.devices.yellowLed.toggle();
            return 'Cylon ' + this.name + ' toggles yellow led';
        },

        toggleAll: function () {
            // this.devices.redLed.toggle();
            // this.devices.yellowLed.toggle();
            return 'Cylon ' + this.name + ' toggles red and yellow led';
        },

        commands: function () {
            return {
                'Toggle red Led': this.redLed,
                'Toggle yellow Led': this.yellowLed,
                'Toggle all': this.toggleAll
            };
        }
    }).start();

    // Cylon.robot({
    //     name: 'Number Eight',

    //     connections: {
    //       arduino: { adaptor: 'firmata', port: '/dev/other_arduino_port' }
    //     },

    //     devices: {
    //       led: { driver: 'led', pin: 10 }
    //     },

    //     someCommand: function () {
    //
    //     },
    //     someOtherCommand: function () {
    //
    //     },
    //
    //     commands: function () {
    //         return {
    //             'Some command': this.someCommand,
    //             'Some other command': this.someOtherCommand
    //         };
    //     }
    // }).start();

});