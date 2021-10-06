import { Slider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListPeople from "../components/ListPeople";
import _ from "lodash";

export default function People() {
  const minBalanceDiff = 500;
  const minBalance = 1000;
  const maxBalance = 4000;
  const marks = [
    {
      value: 1000,
      label: "$1000",
    },
    {
      value: 2000,
      label: "$2000",
    },
    {
      value: 3000,
      label: "$3000",
    },
    {
      value: 4000,
      label: "$4000",
    },
  ];

  const [balance, setBalance] = useState([1000, 1000 + minBalanceDiff]);
  const [people, setPeople] = useState(null);

  const fetchPeople = (range) => {
    axios
      .post("http://localhost:4000/getPeopleInRange", { range })
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => alert(error));
  };

  const [_fetchedPeople] = useState(() =>
    _.debounce(fetchPeople, 1000, {
      leading: false,
      trailing: true,
    })
  );

  const handleBalanceChange = (event, newBalance, activeThumb) => {
    if (!Array.isArray(newBalance)) {
      return;
    }

    if (activeThumb === 0) {
      const range = [
        Math.min(newBalance[0], newBalance[1] - minBalanceDiff),
        newBalance[1],
      ];
      setBalance(range);
      _fetchedPeople(range);
    } else {
      const range = [
        newBalance[0],
        Math.max(newBalance[1], newBalance[0] + minBalanceDiff),
      ];
      setBalance(range);
      _fetchedPeople(range);
    }
  };
  function valuetext(value) {
    return `$${value}`;
  }

  useEffect(() => {
    fetchPeople(balance);
  }, []);
  return (
    <div>
      <Box sx={{ width: 300 }} className="BalanceBox">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography variant="h6">Balance</Typography>
          <Slider
            getAriaLabel={() => "Balance"}
            value={balance}
            onChange={handleBalanceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            min={minBalance}
            max={maxBalance}
            marks={marks}
          />
        </Stack>
      </Box>
      <ListPeople people={people} />
    </div>
  );
}
