import React, { Component } from 'react'
import "../../App.css"
import { prods } from "../Dashboard/PopularProds"
import { invoice } from "../Dashboard/Invoicetable"
import { Chart } from "react-google-charts";
import GaugeChart from 'react-gauge-chart'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export class Dashboard extends Component {
    componentDidMount() {
        this.revCounterEffect();
        this.saleCounterEffect();
        this.custCounterEffect();
        this.billCounterEffect();
    }
    revCounterEffect = () => {
        var current = 0;
        var end = 5589;
        var increment = 10;
        var stepTime = 1;
        var obj = document.getElementById("rev");
        var timer = setInterval(function () {
            current += increment;

            if (current > end)
                current = end;

            obj.innerHTML = `PKR ${current}`;

            if (current == end)
                clearInterval(timer);

        }, stepTime);
    }
    saleCounterEffect = () => {
        var current = 0;
        var end = 86
        var increment = 1;
        var stepTime = 50;
        var obj = document.getElementById("sale");
        var timer = setInterval(function () {
            current += increment;
            obj.innerHTML = `${current}%`;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    custCounterEffect = () => {
        var current = 0;
        var end = 555
        var increment = 1;
        var stepTime = 0.1;
        var obj = document.getElementById("cust");
        var timer = setInterval(function () {
            current += increment;
            obj.innerHTML = `${current}`;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    billCounterEffect = () => {
        var current = 0;
        var end = 866
        var increment = 1;
        var stepTime = 0.1;
        var obj = document.getElementById("bill");
        var timer = setInterval(function () {
            current += increment;
            obj.innerHTML = `PKR ${current}`;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    render() {
        return (
            <div>
                <div className="dashboard-background ">
                    <div className="row py-4">
                        <div className="col">
                            <h4 className="font-weight-lighter ">Dashboard</h4>
                            <small className="text-muted">Today is {new Date().toDateString()}</small>
                        </div>
                    </div>
                    <div className="row sale-activity">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex flex-column text-center">
                                                    <span className="lead text-muted">0</span>
                                                    <span className="lead">Qty</span>
                                                    <span className="lead">To be Packed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex flex-column text-center">
                                                    <span className="lead text-muted">0</span>
                                                    <span className="lead">Qty</span>
                                                    <span className="lead">To be Shipped</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex flex-column text-center">
                                                    <span className="lead text-muted">0</span>
                                                    <span className="lead">Qty</span>
                                                    <span className="lead">To be Deliver</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <div className="d-flex flex-column text-center">
                                                    <span className="lead text-muted">0</span>
                                                    <span className="lead">Qty</span>
                                                    <span className="lead">To be Invoiced</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-4">
                            <div className="d-flex justify-content-center px-3">
                                <div className="d-flex flex-column text-center">
                                    <span className="font-weight-bold lead">Total Sales</span>
                                    <span className="lead">8899</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center px-3 border-top">
                                <div className="d-flex flex-column text-center ">
                                    <span className="font-weight-bold lead">Total Purchase</span>
                                    <span className="lead">8899</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="card rev_card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex flex-column px-3">
                                            <h3 className="text-white" id="rev">PKR</h3>
                                            <small className="text-white">Revenue </small>
                                        </div>
                                        <i className="fas fa-chart-line flat_icons px-3 "></i>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="card sal_card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex flex-column px-3">
                                            <h3 className="text-white" id="sale"></h3>
                                            <small className="text-white">Sales Increase </small>
                                        </div>
                                        <i className="fas fa-store-alt flat_icons px-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="card cli_card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex flex-column px-3">
                                            <h3 className="text-white" id="cust"></h3>
                                            <small className="text-white">Total Customers</small>
                                        </div>
                                        <i className="fas fa-users flat_icons px-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="card bill_card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-center">
                                        <div className="d-flex flex-column px-3">
                                            <h3 className="text-white" id="bill"></h3>
                                            <small className="text-white">Unpaid Bills</small>
                                        </div>
                                        <i className="fas fa-money-bill flat_icons px-3"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="card pop_prod border ">
                                <div className="card-header pop_prod">
                                    <span className="font-weight-bold">Popular Products</span>
                                </div>
                                <div className="card-body prods_wrapper p-1">
                                    {prods.map(el => {
                                        return <div className="d-flex justify-content-between border-bottom pb-2" key={el.id}>
                                            <div className="d-flex wrap ">
                                                <img src={el.image} alt="products" className="img" />
                                                <div className="d-flex flex-column px-2">
                                                    <span className="lead font-weight-bold">{el.name}</span>
                                                    <small>PKR {el.price}</small>
                                                </div>
                                            </div>
                                            <small>{el.sold} Sold</small>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="card pop_prod p-0">
                                <div className="card-header pop_prod">
                                    <span className="font-weight-bold">Sales vs Purchase</span>
                                </div>
                                <div className="card-body text-center">

                                    <Chart
                                        width={'100%'}
                                        height={'300px'}
                                        chartType="AreaChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Year', 'Sales', 'Purchases'],
                                            ['2013', 1000, 400],
                                            ['2014', 1170, 460],
                                            ['2015', 660, 1120],
                                            ['2016', 1030, 540],
                                        ]}
                                        options={{
                                            isStacked: true,
                                            height: 300,
                                            backgroundColor: "rgb(247, 247, 247)",
                                            legend: { position: 'top', maxLines: 3 },
                                            vAxis: { minValue: 0 },
                                            // lineWidth: 25
                                        }}
                                        // For tests
                                        rootProps={{ 'data-testid': '2' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="card pop_prod items p-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between py-3">
                                        <div className="d-flex flex-column py-2 px-2">
                                            <h1 className="font-weight-bold">352</h1>
                                            <small className="text-muted">Low Items</small>
                                        </div>
                                        <CircularProgressbar minValue={0} maxValue={100} strokeWidth={8} className="pregressbar" value={9} text={`9%`} />
                                    </div>
                                </div>
                            </div>
                            <div className="card pop_prod items p-2 mt-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between py-3">
                                        <div className="d-flex flex-column py-2 px-2">
                                            <h1 className="font-weight-bold">1141</h1>
                                            <small className="text-muted">Total Stock</small>
                                        </div>
                                        <CircularProgressbar minValue={0} maxValue={100} strokeWidth={8} className="pregressbar" value={90} text={`90%`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="card pop_prod ">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between">
                                        <span className="lead">Invoice</span>
                                        <button className="btn btn-outline-primary btn-sm">See More</button>
                                    </div>

                                </div>
                                <div className="card-body threeline p-0">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Invoice#</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoice.map(el => {
                                                return <tr key={el.id}>
                                                    <th>{el.id}.</th>
                                                    <td>INV-{el.inv}</td>
                                                    <td className={el.status === "closed" ? 'text-success' : ''}>{el.status}</td>
                                                    <td>{el.amount}</td>
                                                    <td>{el.blnc}</td>
                                                </tr>
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="card pop_prod">
                                <div className="card-body text-center">
                                    <h3 className="font-weight-bold py-3">Fleet</h3>
                                    <GaugeChart id="gauge-chart1" textColor="black" needleColor="#292929" animate={true} colors={["#fa0000", "#fafa00", "#00fa0c",]} />
                                    <div className="d-flex justify-content-between px-5 py-2">
                                        <span className="lead">Total Fleet</span>
                                        <span>223</span>
                                    </div>
                                    <div className="d-flex justify-content-between px-5 py-2">
                                        <span className="lead">On the Move</span>
                                        <span>115</span>
                                    </div>
                                    <div className="d-flex justify-content-between px-5 py-2">
                                        <span className="lead">In Maintenance</span>
                                        <span>3</span>
                                    </div>
                                    <div className="d-flex justify-content-between px-5 py-1">
                                        <span className="lead">Shipping</span>
                                        <span>34</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
