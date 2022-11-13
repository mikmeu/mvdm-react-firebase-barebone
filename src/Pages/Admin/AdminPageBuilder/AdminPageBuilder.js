import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Heading, Icon, Table } from '../../../Components';
import Link from '../../../Components/Link';
import { PageBuilderService } from '../../../services/DatabaseService';

class AdminPageBuilder extends Component {
    state = {
        pages: []
    }
    componentDidMount() {
        const self = this;
        this.mount = true;
        PageBuilderService.getAll().then((result) => {
           if (this.mount) self.setState({pages:result})
        }            
        ).catch(error => toast.error(error));
    }
    componentWillUnmount() {
        this.mount = false;
    }
    render() {
        const { pages } = this.state;
        const { routes } = this.props;
        
        return (<div>
                    <Heading type="h2">Pages</Heading>
                    <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} element={<route.component />} />
                        ))}
                    <Route path="/" element={<AdminPageBuilderIndex pages={pages} /> }/>
                    </Routes>
                </div>
        );
    }
}
function AdminPageBuilderIndex({pages}) {
    return(<Table heading={['Slug','Title','Actions']} rows={pages.map((page) => ([page.id,page.title,<Link type="navLink" href={"/admin/pages/"+page.id } text={<Icon name="edit" />}></Link>]))} />)
}
export default AdminPageBuilder;