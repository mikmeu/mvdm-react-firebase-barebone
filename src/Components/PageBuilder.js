import React from 'react';
import Button from './Button';
import Grid from './Grid';
import GridCell from './GridCell';
import Heading from './Heading';
import Image from './Image';
import Link from './Link';
import List from './List';
import Paragraph from './Paragraph';
import Table from './Table';

function PageBuilder({rows}) {
    return (
        <div>
            {rows.map((row,i) => {
                switch(row.type) {
                    case 1: 
                        return(<div id={'grid-row-'+row.id} key={i}><PageBuilderCells cells={row.cells} /></div>)
                    case 2: 
                        return(<Grid id={'grid-row-'+row.id} num="two" key={i}><PageBuilderCells cells={row.cells} /></Grid>)
                    case 3: 
                        return(<Grid id={'grid-row-'+row.id} num="three" key={i}><PageBuilderCells cells={row.cells} /></Grid>)
                    case 4: 
                        return(<Grid id={'grid-row-'+row.id} num="four" key={i}><PageBuilderCells cells={row.cells} /></Grid>)
                    case 5: 
                        return(<Grid id={'grid-row-'+row.id} num="five" key={i}><PageBuilderCells cells={row.cells} /></Grid>)
                    case 6: 
                        return(<Grid id={'grid-row-'+row.id} num="six" key={i}><PageBuilderCells cells={row.cells} /></Grid>)
                    case 7: 
                        return(<Grid id={'grid-row-'+row.id} num="three" key={i}><PageBuilderCell data={row.cells[0]} /><PageBuilderCell data={row.cells[1]} dPos={[2,3]} /></Grid>)
                    case 8: 
                        return(<Grid id={'grid-row-'+row.id} num="three" key={i}><PageBuilderCell data={row.cells[0]} dPos={[1,2]} /><PageBuilderCell data={row.cells[1]} /></Grid>)
                    case 9: 
                        return(<Grid id={'grid-row-'+row.id} num="four" key={i}><PageBuilderCell data={row.cells[0]} /><PageBuilderCell data={row.cells[1]} dPos={[2,4]} /></Grid>)
                    case 10: 
                        return(<Grid id={'grid-row-'+row.id} num="four" key={i}><PageBuilderCell data={row.cells[0]} dPos={[1,3]} /><PageBuilderCell data={row.cells[1]} /></Grid>)
                }
            })}
        </div>
    );
}

function PageBuilderCells({cells}) {
    return (
        <React.Fragment>
            {cells.map((cell,i) => {
                return(<PageBuilderCell key={i} data={cell} />)
            })}
        </React.Fragment>
    );
}

function PageBuilderCell({data,...otherProps}) {
    return (
        <GridCell {...otherProps}>
            {data.map((item,i) => {
                return(<PageBuilderItem key={i} item={item} />)
            })}
        </GridCell>
    );
}

function PageBuilderItem({item}) {
    switch(item.type) {
        case 'text' :
            return(<Paragraph>{item.value}</Paragraph>)
        case 'h1': case 'h2': case 'h3': case 'h4': case 'h5':
            return(<Heading type={item.type}>{item.value}</Heading>)
        case 'image':
            return(<Image src={item.value} title={item.title} />)
        case 'iframe':
            return(<iframe src={item.value}></iframe>)
        case 'link':
            return(<Link href={item.value.href} text={item.value.text} />)
        case 'button':
            return(<Button type="a" href={item.value.href}>{item.value.text}</Button>)
        case 'list':
            return(<List items={item.value} />)
        case 'table':
            return(<Table heading={item.value.heading} rows={item.value.rows} />)
    }
    return (
        <div>

        </div>
    );
}

export default PageBuilder;
