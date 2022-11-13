import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Heading, Icon, Table } from '../../../Components';
import Link from '../../../Components/Link';
import { BlogService } from '../../../services/DatabaseService';

class AdminBlogs extends Component {
    state = {
        blogs: []
    }
    componentDidMount() {
        const self = this;
        this.mount = true;
        BlogService.getAll().then((result) => {
           if (this.mount) self.setState({blogs:result})
        }            
        ).catch(error => toast.error(error));
    }
    componentWillUnmount() {
        this.mount = false;
    }
    render() {
        const { blogs } = this.state;
        const { routes } = this.props;
        return (<div>
                    <Heading type="h2">Blogs</Heading>
                    <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} path={route.path} element={<route.component />} />
                        ))}
                    <Route path="/" element={<AdminBlogsIndex blogs={blogs} /> }/>
                    </Routes>
                </div>
        );
    }
}
function AdminBlogsIndex({blogs}) {
    return(<Table heading={['Slug','Title','Actions']} rows={blogs.map((blog) => ([blog.id,blog.newsTitle,<Link type="navLink" href={"/admin/blogs/"+blog.id } text={<Icon name="edit" />}></Link>]))} />)
}
export default AdminBlogs;