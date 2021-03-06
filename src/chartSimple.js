const chartSimple = {
    offset: {
        x: 0,
        y: 0,
    },
    scale: 1,
    nodes: {
        sandstone_block: {
            id: 'sandstone_block',
            displayName: 'Sandstone Block',
            amount: 1,
            source: "Stonemason",
            crafted: true,
            position: {
                x: 425,
                y: 100,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'output',
                },
            },
        },
        sandstone: {
            id: 'sandstone',
            displayName: "Sandstone",
            amount: 2,
            source: "Sandstone",
            crafted: false,
            position: {
                x: 300,
                y: 250,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
            },
        },
        limestone_block: {
            id: 'limestone_block',
            displayName: "Limestone Block",
            amount: 1,
            source: "Stonemason",
            crafted: true,
            position: {
                x: 550,
                y: 250,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
                port2: {
                    id: 'port2',
                    type: 'output',
                },
            },
        },
        limestone: {
            id: 'limestone',
            displayName: 'Limestone',
            amount: 1,
            source: "Limestone",
            crafted: false,
            position: {
                x: 425,
                y: 400,
            },
            ports: {
                port1: {
                    id: 'port1',
                    type: 'input',
                },
            },
        },
    },
    links: {
        link1: {
            id: 'link1',
            from: {
                nodeId: 'sandstone_block',
                portId: 'port1',
            },
            to: {
                nodeId: 'sandstone',
                portId: 'port1',
            },
        },
        link2: {
            id: 'link2',
            from: {
                nodeId: 'sandstone_block',
                portId: 'port1',
            },
            to: {
                nodeId: 'limestone_block',
                portId: 'port1',
            },
        },
        link3: {
            id: 'link3',
            from: {
                nodeId: 'limestone_block',
                portId: 'port2',
            },
            to: {
                nodeId: 'limestone',
                portId: 'port1',
            },
        },
    },
    selected: {},
    hovered: {},
};

export default chartSimple;
