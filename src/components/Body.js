import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { kural_data } from '../data/kural_data'
import TamilKural from './TamilKural';
import ToggleSwitch from './ToggleSwitch'
import EnglishKural from './EnglishKural';
import SearchBox from './SearchBox';

function Body() {
    const [selectedValue, setSelectedValue] = useState(0);
    const [kuralData, setKuralData] = useState([])
    const [selectedData, setSelectData] = useState([])
    const [language, setLanguage] = useState(0)
    const [label, setLabel] = useState('அதிகாரம்')
    const [kuralLabel, setKuralLabel] = useState('குறள்')
    const [searchKural, setSearchKural] = useState(0);

    const handleDropdownChange = (event) => {
        setSelectedValue(prevState => event.target.value);
    };

    useEffect(() => {
        setKuralData(kural_data)
        setSelectedValue(1)
    }, [])

    useEffect(() => {
        getKuralData();
    }, [selectedValue]);

    useEffect(() => {
        searchKural === null || searchKural === 0 ?
            setSelectedValue(1)
            :
            setSelectData(kuralData.filter(item => {
                return item.Number == searchKural;
            }))
    }, [searchKural]);

    const getKuralData = () => {
        let select = kuralData.filter(item => {
            return item.Number > (selectedValue * 10 - 10) && item.Number <= selectedValue * 10;
        });
        setSelectData(select)
    }

    const changeLanguage = () => {
        setLanguage(prevState => !prevState)
        language ? setLabel('அதிகாரம்') : setLabel('Chapter')
        language ? setKuralLabel('குறள்') : setKuralLabel('Couplet')
    }

    const changeSearchValue = (e) => {
        // console.log(typeof (e.target.value), (e.target.value));
        // console.log(Number(e.target.value) > 0 && Number(e.target.value) <= 1330);
        e.target.value == '' ?
            setSearchKural(null)
            :
            (Number(e.target.value) > 0 && Number(e.target.value) <= 1330) && setSearchKural(e.target.value);
        e.target.value !== '' && (Number(e.target.value) > 0 && Number(e.target.value) <= 1330) &&
            setSelectedValue(Math.ceil(e.target.value / 10))
    }

    const handleReset = () => {
        setSearchKural(0)
        setSelectedValue(1);
    }

    return (
        <main className='container'>
            <div className="filters container-flex">
                <Dropdown selectedValue={selectedValue} handleDropdownChange={handleDropdownChange} label={label} />
                <SearchBox kuralLabel={kuralLabel} searchKural={searchKural} changeSearchValue={changeSearchValue} handleReset={handleReset} />
                <ToggleSwitch label={'Tamil'} changeLanguage={changeLanguage} />
            </div>
            <br />
            <h2>{label} - {selectedValue}</h2>
            {
                selectedData && selectedData.map((item, index) => (
                    !language ? <TamilKural item={item} key={item.Number} /> : <EnglishKural item={item} key={item.Number} />
                ))
            }
        </main>
    )
}

export default Body