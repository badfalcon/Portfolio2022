import { Container, Typography, Box, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Privacy = () => {
    const { t } = useTranslation();

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
                <Box sx={{ pb: 5 }}>
                    <Typography align="center" variant="h3" sx={{ fontWeight: 'bold' }}>
                        {t('privacy.title')}
                    </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.introduction')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.data_collection_title')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.data_collection')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.data_usage_title')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.data_usage')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.data_sharing_title')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.data_sharing')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.data_protection_title')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.data_protection')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.contact_title')}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {t('privacy.contact')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>
                    {t('privacy.policy_changes_title')}
                </Typography>
                <Typography variant="body1" paragraph>
                    {t('privacy.policy_changes')}
                </Typography>
            </Paper>
        </Container>
    );
};

export default Privacy;
