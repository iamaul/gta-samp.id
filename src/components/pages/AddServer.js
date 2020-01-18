import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';

class AddServer extends Component {

    state = {
        ip: '',
        port: '',
        hostname: '',
        gamemode: '',
        website_url: '',
        posted_by: ''
    }

    onSubmit = e => {
        e.preventDefault();

        const newServer = this.state;

        const { firestore, history } = this.props;

        if (newServer.website_url === '')
            newServer.website_url = 'N/A';

        firestore.add(
            {collection: 'servers'}, 
            newServer
        )
        .then(() => 
            history.push('/')
        );
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back
                        </Link>
                    </div>
                </div>

                <div className="card border-2 shadow my-5">
                    <div className="card-header">Add Server</div>
                    <div className="card-body p-5">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="ip"
                                    placeholder="IP"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.ip}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name="port"
                                    placeholder="Port"
                                    minLength="4"
                                    maxLength="4"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.port}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="hostname"
                                    placeholder="Hostname"
                                    onChange={this.onChange}
                                    value={this.state.hostname}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="gamemode"
                                    placeholder="Gamemode"
                                    onChange={this.onChange}
                                    value={this.state.gamemode}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="website_url"
                                    placeholder="Website URL"
                                    onChange={this.onChange}
                                    value={this.state.website_url}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="posted_by"
                                    placeholder="Your name/server owner"
                                    required
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                />
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

AddServer.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddServer);
