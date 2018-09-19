import moment from 'moment';
// import mockUuid from '../__mocks__/mock-uuid';

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        note: 'This is rent',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit_Card',
        note: 'Pay back credit',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];