import React, { Component } from 'react';
import { Button, FormField, Message, Paragraph } from '../../../Components';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../services/FirebaseFunctions';
import { toast } from 'react-toastify';

const typesToText = ["Change type","100%","50%/50%","30%/30%/30%","25%/25%/25%/25%","20%/20%/20%/20%/20%","15%/15%/15%/15%/15%/15%","30%/70%","25%/75%","20%/80%","70%/30%","75%/25%","80%/20%"];
class AdminPageBuilderCreate extends Component {
    state = {
        concept_title:null,
        concept_slug:null,
        id:null,
        concept_rows:[],
        showRowTypes:false,
        conceptSaved:null
    }
    componentDidMount() {
        
    }
    saveConcept = () => {
        let newPageRef = this.state.id;
        if (!newPageRef) {
            newPageRef = doc(collection(db, "pagebuilder"));
        }
        setDoc(newPageRef,{concept_title:this.state.concept_title,concept_slug:this.state.concept_slug,concept_rows:JSON.stringify(this.state.concept_rows)},{merge:true});
        this.setState({id:newPageRef,conceptSaved:new Date()});
    }
    changeField = (event) => {
        let name = event.target.getAttribute('name');
        this.setState({[name]:event.target.value});
    }
    publishPage = () => {
        if(!this.state.concept_title || !this.state.concept_slug) {
            toast.error("Your page is missing a title or slug and cannot be published");
        } else {
            setDoc(this.state.id,
                {
                title:this.state.concept_title,
                slug:this.state.concept_slug,
                publish_date:new Date(),
                edit_date:new Date(),
                rows:JSON.stringify(this.state.concept_rows)
            },{merge:true}).then(() => {
                toast.success("Page published!");
            }).catch(error => {
                toast.error(error.message);
            });
        }
        
    }
    addRow = (type) => {
        let rows = this.state.concept_rows;
        let noOfCells = 1;
        if (type < 7) {
            noOfCells = type;
        } else {
            noOfCells = 2;
        }
        let cells = [];
        for (let i = 0; i < noOfCells; i++) {
            cells.push([]);
        }
        rows.push({
            type:type,
            noOfCells:noOfCells,
            cells:cells
        });
        this.setState({showRowTypes:false,concept_rows:rows});
    }
    showRowTypes = () => {
        this.setState({showRowTypes:true});
    }
    deleteRow = (index) => {
        let rows = this.state.concept_rows;
        rows.splice(index,1);
        this.setState({concept_rows:rows});
    }
    changeType = (event) => {
        const index = event.target.getAttribute('data-id');
        const type = event.target.value;
        let rows = this.state.concept_rows;
        let noOfCells = 1;
        if (type < 7) {
            noOfCells = type;
        } else {
            noOfCells = 2;
        }
        let currentCellsLength = rows[index].cells.length;
        if (currentCellsLength < noOfCells) {
            for (let i = 0; i < noOfCells - currentCellsLength; i++) {
                rows[index].cells.push([]);
            }  
        }
        rows[index].type = type;
        rows[index].noOfCells = noOfCells;
        this.setState({concept_rows:rows});
    }
    addItem = (index) => {
        const rowIndex = index[0];
        const cellIndex = index[1];
        let rows = this.state.concept_rows;
        rows[rowIndex].cells[cellIndex].push({type:'empty',value:''});
        this.setState({concept_rows:rows});
    }
    changeItemType = (index) => {
        const rowIndex = index[0];
        const cellIndex = index[1];
        const itemIndex = index[2];
        let rows = this.state.concept_rows;
        rows[rowIndex].cells[cellIndex][itemIndex].type = index[3];
        this.setState({concept_rows:rows});
    }
    changeItemValue = (event) => {
        const rowIndex = event.target.getAttribute('data-row-index');
        const cellIndex = event.target.getAttribute('data-cell-index');
        const itemIndex = event.target.getAttribute('data-item-index');
        let rows = this.state.concept_rows;
        rows[rowIndex].cells[cellIndex][itemIndex].value = event.target.value;
        this.setState({concept_rows:rows});
        console.log(rows);
    }
    render() {
        const { concept_rows, showRowTypes } = this.state;
        return (
            <div>
                <div>
                    <FormField type="input" label="Title" name="concept_title" onChange={this.changeField} />
                    <FormField type="input" label="Slug" name="concept_slug" onChange={this.changeField} />
                </div>
                <div className="pbe-window">
                    {concept_rows.map((row,index) => (
                        <div className="pbe-row-outer">
                        ROW #{index+1} <Button type="button" onClick={() => this.deleteRow(index)}>Delete</Button> <select className="form-select" defaultValue={row.type} data-id={index} onChange={this.changeType}>
                    {typesToText.map((option, index) => {
                        return(<option key={index} value={index}>{option}</option>)
                    })}
                </select>
                        <div className={"grid pbe-row pbe-row-"+row.type} key={index}>
                                {row.cells.map((cell,ix) => {
                                    if (ix < row.noOfCells) {
                                        return(
                                            <div key={ix} className="pbe-cell">
                                                    {cell.map((item,ind) => {
                                                        let editType = null;
                                                        if (item.type == 'text' || item.type == 'h1' || item.type == 'h2' || item.type == 'h3' || item.type == 'h4' || item.type == 'h5') {
                                                            editType = 'input';
                                                        }
                                                        return(
                                                        <div className="pbe-item" key={ind}>
                                                            {item.type == 'empty' && <div>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'text'])}>+ Text</Button>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'h1'])}>+ h1</Button>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'h2'])}>+ h2</Button>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'h3'])}>+ h3</Button>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'h4'])}>+ h4</Button>
                                                                <Button type="button" onClick={() => this.changeItemType([index,ix,ind,'h5'])}>+ h5</Button>
                                                                </div>}
                                                            {editType == 'input' && <div>
                                                                <div className="pbe-item-type">{item.type}</div>
                                                                <div className="pbe-item-edit">
                                                                    <input data-row-index={index} data-cell-index={ix} data-item-index={ind} onChange={this.changeItemValue} />
                                                                </div>
                                                                </div>}
                                                            </div>
                                                    )})}
                                                <Button type="button" onClick={() => this.addItem([index,ix])}>+ Add item</Button>
                                            </div>
                                        )
                                    }
                                    })}
                        </div>
                        </div>
                    ))}
                    <div className="pbe-row pbe-row-placeholder">
                        {!showRowTypes && <div className="pbe-row-placeholder-btns"><Button type="button" onClick={this.showRowTypes}>+ New Row</Button></div>}
                        {showRowTypes && <div>
                            <div>Choose a layout type</div>
                            <div className="pbe-row-placeholder-btns">
                                <Button type="button" onClick={() => this.addRow(1)}>1</Button>
                                <Button type="button" onClick={() => this.addRow(2)}>2</Button>
                                <Button type="button" onClick={() => this.addRow(3)}>3</Button>
                                <Button type="button" onClick={() => this.addRow(4)}>4</Button>
                                <Button type="button" onClick={() => this.addRow(5)}>5</Button>
                                <Button type="button" onClick={() => this.addRow(6)}>6</Button>
                                <Button type="button" onClick={() => this.addRow(7)}>7</Button>
                                <Button type="button" onClick={() => this.addRow(8)}>8</Button>
                                <Button type="button" onClick={() => this.addRow(9)}>9</Button>
                                <Button type="button" onClick={() => this.addRow(10)}>10</Button>
                            </div>
                            </div>}
                            <div className="clearfix"></div> 
                    </div>
                </div>

                {this.state.conceptSaved && <Message type="check">Concept saved at DATE TODO</Message>}
                <Button type="button" onClick={this.saveConcept}>Save Concept</Button>
                <Button type="button" onClick={this.publishPage}>Publish</Button>
            </div>
        );
    }
}

export default AdminPageBuilderCreate;