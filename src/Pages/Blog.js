import React, { Component } from 'react';
import { Item, ItemContainer, Loader } from '../Components';
import { BlogService } from '../services/DatabaseService';

class Blog extends Component {
    state = {
        isLoading: true,
        blogs:[]
    }

    componentDidMount() {
        const self = this;
        this.mount = true;
        BlogService.getAll().then((result) => {
           if (this.mount) self.setState({blogs:result,isLoading:false})
        }            
        ).catch(error => console.log(error));
    }
    componentWillUnmount() {
        this.mount = false;
    }

    render() {
        const { isLoading, blogs } = this.state;
        return (<div>
                    {isLoading && <Loader />}
                    {!isLoading && <ItemContainer num="three">{blogs.map((blog,index) => (<Item key={index} title={blog.newsTitle}>{blog.shortSummary}</Item>))}</ItemContainer>}
                </div>
           
        );
    }
}

export default Blog;