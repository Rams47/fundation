import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from '../routes'

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <Link route={`/campaigns/${address}`} ><a>View Campaign</a></Link>,
        fluid: true
      };
    });

    return <Card.Group items={items} />
  }


  render() {
    return (
      <Layout>
        <div>
          <h3>Open Camapigns</h3>

          <Link route='/campaigns/new'>
            <a>
              <Button
                floated="right"
                content="Create Camapign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;