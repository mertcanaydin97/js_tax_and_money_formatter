
        function addTax(data) {
            const formatCurrency = (amount, locale, currency) => {
                const fmt = new Intl.NumberFormat(locale, {
                    style: "currency",
                    currencyDisplay: "code",
                    currency: 'TRY',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });
                return fmt.format(amount).replace(/^([A-Z]{3})\s*(.+)$/, "$2 $1");
            };



            if (data.length > 0) {
                let price = data.replace(' ₺', '');
                price = price.replace('.', '') * 1.20
                return formatCurrency(price, 'tr-TR', 'TRY');
            } else {
                return 0;
            }

        }

addTax(price)
