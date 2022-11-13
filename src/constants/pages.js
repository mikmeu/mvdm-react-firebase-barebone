const PAGES = [];
PAGES.HOME = {
    title:"Home",
    rows:[
    {
        id:1,
        type:8,
        cells: 
        [
            [
                {
                    id:1,
                    type:'h1',
                    value:'30%'
                },
                {
                    id:2,
                    type:'text',
                    value:'This is the text under'
                },
                {
                    id:3,
                    type:'text',
                    value:'This is the text under 2'
                },
                {
                    id:4,
                    type:'button',
                    value:{href:'/about',text:'Button test'}
                }
            ],
            [
                {
                    type:'h2',
                    value:'70%'
                },
                {
                    type:'list',
                    value:['test','test']
                }
            ]
        ]
    },
    {
        id:2,
        type:1,
        cells: 
        [
            [
                {
                    id:1,
                    type:'h1',
                    value:'100%'
                },
                {
                    id:2,
                    type:'text',
                    value:'This is the text under'
                },
                {
                    id:3,
                    type:'button',
                    value:{href:'/about',text:'Button test'}
                }
            ]
        ]
    }
    ]
};
export default PAGES;