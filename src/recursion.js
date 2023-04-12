let obj = [
    {
        id: "1",
        string: 'someText1',
        flag: false,
        arr: [
            {
                id: "1_1",
                string: 'someText1_1',
                flag: false,
                arr: [
                    {
                        id: "1_1_1",
                        string: 'someText1_1_1',
                        flag: false
                    },
                    {
                        id: "1_1_2",
                        string: 'someText1_1_2',
                        flag: false
                    },
                    {
                        id: "1_1_3",
                        string: 'someText1_1_3',
                        flag: false
                    },
                    {
                        id: "1_1_4",
                        string: 'someText1_1_4',
                        flag: false
                    }
                ]
            },
            {
                id: "1_2",
                string: 'someText1_2',
                flag: false,
                arr: [
                    {
                        id: "1_2_1",
                        string: 'someText1_2_1',
                        flag: false
                    },
                    {
                        id: "1_2_2",
                        string: 'someText1_2_2',
                        flag: false
                    },
                    {
                        id: "1_2_3",
                        string: 'someText1_2_3',
                        flag: false
                    },
                    {
                        id: "1_2_4",
                        string: 'someText1_1_4',
                        flag: false
                    }
                ]
            }
        ]
    },
    {
        id: "2",
        string: 'someText1',
        flag: false,
        arr: [
            {
                id: "2_1",
                string: 'someText1_1',
                flag: false,
                arr: [
                    {
                        id: "2_1_1",
                        string: 'someText2_1_1',
                        flag: true
                    },
                    {
                        id: "2_1_2",
                        string: 'someText2_1_2',
                        flag: false
                    },
                    {
                        id: "2_1_3",
                        string: 'someText2_1_3',
                        flag: true
                    },
                    {
                        id: "2_1_4",
                        string: 'someText1_1_4',
                        flag: false
                    }
                ]
            },
            {
                id: "2_2",
                string: 'someText2_2',
                flag: false,
                arr: [
                    {
                        id: "2_2_1",
                        string: 'someText2_2_1',
                        flag: false
                    },
                    {
                        id: "2_2_2",
                        string: 'someText2_2_2',
                        flag: false
                    },
                    {
                        id: "2_2_3",
                        string: 'someText2_2_2',
                        flag: true
                    },
                    {
                        id: "2_2_4",
                        string: 'someText2_2_4',
                        flag: false
                    }
                ]
            }
        ]
    }
];

let counter = 0;
function recurs(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "object" && obj[key] !== null) //took that from net (will think about other solution in the evening)
            recurs(obj[key]);
        else {
            if (key === "flag" && obj[key] === true) {
                counter++;
            }
        }
    }
    return counter
}

// recurs(obj);
console.log(`number of elements with flag: true = ${recurs(obj)}`);

