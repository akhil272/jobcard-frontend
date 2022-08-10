import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { GenerateBillProps } from '@Store/jobCards/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../GenerateBill/styles';
import DiscountDialog from './DiscountDialog';
import OtherItemsDialog from './OtherItemsDialog';
import PayDialog from './PayDialog';

const invoiceDate = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
}).format(new Date());

const GenerateBill = ({
    jobCardDetails,
    assignees,
    getAssignees,
    generateBill,
    addOtherItems,
    addJobCardItemDiscount,
    updatePay,
}: GenerateBillProps) => {
    const { id } = useParams<{ id: string }>();
    const classes = styles();
    const [discountDialog, setDiscountDialog] = useState<boolean>(false);
    const [payDialog, setPayDialog] = useState<boolean>(false);
    const [otherItemsDialog, setOtherItemsDialog] = useState<boolean>(false);

    useEffect(() => {
        getAssignees({ search: '' });
    }, [getAssignees]);
    useEffect(() => {
        generateBill(id);
    }, [generateBill, id]);

    return (
        <div className={classes.gbroot}>
            <div>
                <h2>Invoice #{jobCardDetails?.id}</h2>
                <p>{invoiceDate}</p>
            </div>
            <div className={classes.gbnotes}>
                <div>
                    <p className={classes.gbUserFirstName}>{jobCardDetails?.pickupUserFirstName}</p>
                    <p>Mob: {jobCardDetails?.pickupUserPhone}</p>
                    <p>Mail ID: {jobCardDetails?.pickupUserEmail}</p>
                    <p>Vehicle No: {jobCardDetails?.registrationNumber}</p>
                </div>
                <div>
                    <p className={classes.gbUserFirstName}>DBS Automotive</p>
                    <p>Mob: 097119 83699</p>
                    <p>Mail ID: neverhestiate@dbsautomotive.com</p>
                    <p>34/138 H, NH Bye Pass, Edappally, Ernakulam, Kerala</p>
                </div>
            </div>
            <div className={classes.gbtable}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Items</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {jobCardDetails?.items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell component="th" scope="row">
                                        {item.subCategory.name}
                                    </TableCell>
                                    <TableCell align="right">{item.amount}</TableCell>
                                    <TableCell align="right">1</TableCell>
                                    <TableCell align="right">{item.amount}</TableCell>
                                </TableRow>
                            ))}
                            {jobCardDetails?.additionalItems?.map((item) => (
                                <TableRow key={item.jobCardId}>
                                    <TableCell component="th" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">
                                        {item.price * item.quantity}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={() => setOtherItemsDialog(!otherItemsDialog)}>
                    Add Other Items
                </Button>
            </div>
            <div className={classes.gbnotes}>
                <div>
                    <p>Notes</p>
                    <p>{jobCardDetails?.discount?.notes}</p>
                </div>
                <div className={classes.gbtotal}>
                    <div>
                        <p>Total</p>
                        <p>{jobCardDetails?.totalAmount}</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>{jobCardDetails?.discount?.discount}</p>
                    </div>
                    <div>
                        <p>Tax Rate</p>
                        <p>18</p>
                    </div>
                </div>
            </div>
            <div className={classes.gbsubtotal}>
                <p>Subtotal</p>
                <p>
                    {Number(jobCardDetails?.totalAmount) -
                        Number(jobCardDetails?.discount?.discount ?? 0)}
                </p>
            </div>
            <div className={classes.gbpayment}>
                <Button onClick={() => setDiscountDialog(!discountDialog)}>Add Discount</Button>
                <Button onClick={() => setPayDialog(!payDialog)}>Pay Offline</Button>
            </div>

            <DiscountDialog
                discountDialog={discountDialog}
                setDiscountDialog={setDiscountDialog}
                id={Number(id)}
                addJobCardItemDiscount={addJobCardItemDiscount}
                assignees={assignees}
                onSuccess={() => generateBill(id)}
            />
            <PayDialog
                payDialog={payDialog}
                setPayDialog={setPayDialog}
                updatePay={updatePay}
                onSuccess={() => generateBill(id)}
                id={Number(id)}
                totalAmount={Number(jobCardDetails?.totalAmount)}
            />
            <OtherItemsDialog
                otherItemsDialog={otherItemsDialog}
                setOtherItemsDialog={setOtherItemsDialog}
                onSuccess={() => generateBill(id)}
                id={Number(id)}
                addOtherItems={addOtherItems}
            />
        </div>
    );
};

export default GenerateBill;
