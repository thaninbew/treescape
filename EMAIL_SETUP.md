# Email Configuration Setup

To enable the contact form email functionality, you need to set up email service credentials.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
3. **Use the app password** (not your regular Gmail password) in the `EMAIL_PASS` variable

## Alternative Email Services

You can also use other email services by modifying the transporter configuration in `app/api/contact/route.ts`:

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransporter({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-domain.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Testing

Once configured, the contact form will:
1. Send submissions to `reservation@treescaperesort.com`
2. Send confirmation emails to users
3. Display success/error messages based on the email sending result

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of regular passwords
- Consider using dedicated email services like SendGrid, Mailgun, or AWS SES for production 