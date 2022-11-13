import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormField } from '../../../Components';
import { PageBuilderService } from '../../../services/DatabaseService';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class AdminPageBuilderEdit extends Component {
    state = {
        page:{}
    }
    onFinish = (event) => {
        event.preventDefault();
    }
    componentDidMount() {
        const self = this;
        PageBuilderService.getOne(this.props.params.id).then((result) => {
            self.setState({page:result.data});
            self.getRows();
        }).catch((error) => {
            toast.error(error.message);
        })
    }
    getRows = () => {
        
    }
    render() {
        const { page } = this.state;
        return (
            <div>
                <FormField type="input" label="Title" values={page.title} />
                <FormField type="input" label="Slug" values={this.props.params.id} />
                <FormField type="submit" values="Update" />
            </div>
        );
    }
}

export default withParams(AdminPageBuilderEdit);