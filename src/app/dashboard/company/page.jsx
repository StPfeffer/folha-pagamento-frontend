'use client';

import React, { useState, useEffect } from "react";
import { CompanyService } from "@/services/CompanyService";
import { Box } from "@mui/material";

const CompanyPage = () => {
  const [company, setCompany] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const companyService = new CompanyService();

      try {
        const response = await companyService.get();

        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <div>
        <h1>Empresa</h1>
        {company && (
          <div>
            <h2>{company.nomeFantasia}</h2>
            <p>{company.razaoSocial}</p>
          </div>
        )}
      </div>
    </Box>
  );
}

export default CompanyPage;