import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../assets/Spinner';

class Home extends Component {

    render() {

        const { sampservers } = this.props;
        let total = 0;

        for (var o in sampservers)
            total++;

        if (sampservers) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2> <i className="fas fa-server"></i> Server Indonesia </h2>
                        </div>
                        <div className="col-md-6">
                            <p className="text-right text-secondary">
                                Total Servers <span className="text-info">{total}</span>
                            </p>
                        </div>
                    </div>

                    <table className="table table-striped table-responsive">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Hostname</th>
                                <th>IP</th>
                                <th>Gamemode</th>
                                <th>Website</th>
                                <th>Posted by</th>
                                <th>Direct</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sampservers.map(server => (
                                    <tr key={server.ip}>
                                        <td>{server.hostname}</td>
                                        <td>{server.ip}:{server.port}</td>
                                        <td>{server.gamemode}</td>
                                        <td><a 
                                                href={`http://${server.website_url}`} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {server.website_url}
                                            </a>
                                        </td>
                                        <td>{server.posted_by}</td>
                                        <td>
                                            <a 
                                                href={`samp://${server.ip}:${server.port}`}
                                                target="_blank"
                                                rel="noopener noreferrer" 
                                            >
                                                <button 
                                                    className="btn btn-success btn-sm btn-block"
                                                >
                                                    <i className="fas fa-play-circle"></i> Play!
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return <Spinner />
        }
    }
}

Home.propTypes = {
    firestore: PropTypes.object.isRequired,
    sampservers: PropTypes.array
}

export default compose(
    firestoreConnect([{collection: 'servers'}]),
    connect((state) => ({
        sampservers: state.firestore.ordered.servers
    }))
)(Home);