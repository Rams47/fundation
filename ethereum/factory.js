import web3 from "./web3";;
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x32bb97fAC60Cb052Ba63669F8D6DEEf5700E0e48'
);

export default instance;