const style = {
    boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset',
    backgroundColor: '#a28f27',
    borderColor: '#796b1d',
    fontSize: '80px',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '1px 1px 0px #ab9a3c',
    userSelect: 'none'
};

export const data = [
    {
        title: '1',
        url: 'https://i.postimg.cc/k7NvsJ5f/Picture1.png',
        style: {
            height: 616,
            width: 345,
            ...style
        }
    },
    {
        title: '2',
        url: '',
        style: {
            height: 100,
            width: 100,
            ...style
        }
    },
];