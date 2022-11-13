import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormField } from '../../../Components';
import { BlogService } from '../../../services/DatabaseService';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class AdminBlogsEdit extends Component {
    state = {
        blog:{}
    }
    onFinish = (event) => {
        event.preventDefault();
    }
    componentDidMount() {
        const self = this;
        BlogService.getOne(this.props.params.id).then((result) => {
            self.setState({blog:result.data});
        }).catch((error) => {
            toast.error(error.message);
        })
    }
    
    render() {
        const { blog } = this.state;
        return (
            <div>
                <FormField type="input" label="Title" values={blog.newsTitle} />
                <FormField type="input" label="Slug" values={this.props.params.id} />
                <FormField type="submit" values="Update" />
            </div>
        );
    }
}

export default withParams(AdminBlogsEdit);