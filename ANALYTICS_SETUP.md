# Analytics Setup Guide

## Google Analytics 4 Setup

### 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new account and property
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Environment Variables

Create `.env.local` file in your project root:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your-clarity-id

# Website URL
NEXT_PUBLIC_SITE_URL=https://dwantech.com
```

### 3. Replace with Your IDs

- Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID
- Replace `your-clarity-id` with your actual Clarity ID

## Microsoft Clarity Setup

### 1. Create Clarity Account

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with Microsoft account
3. Create a new project
4. Get your Clarity ID

### 2. Features Included

- **User session recordings** - See how users interact with your site
- **Heatmaps** - Visual representation of user clicks and scrolls
- **Insights** - Automatic insights about user behavior
- **Funnels** - Track user conversion paths

## Analytics Features Implemented

### 1. Automatic Tracking

- **Page views** - All pages automatically tracked
- **User sessions** - Complete session recording
- **Device & browser info** - User demographics
- **Traffic sources** - Where users come from

### 2. Custom Events

- **WhatsApp clicks** - Track contact attempts
- **CTA clicks** - Track button interactions
- **Service page views** - Track service interest
- **Portfolio views** - Track project interest
- **Contact form submissions** - Track conversions

### 3. Conversion Tracking

- **Goal completions** - Track business objectives
- **Funnel analysis** - Understand user journey
- **A/B testing** - Test different versions
- **Performance monitoring** - Site speed and UX

## Dashboard Access

### Google Analytics 4

- **URL**: https://analytics.google.com/
- **Features**: Real-time data, audience insights, conversion tracking
- **Reports**: Acquisition, Behavior, Conversions

### Microsoft Clarity

- **URL**: https://clarity.microsoft.com/
- **Features**: Session recordings, heatmaps, insights
- **Reports**: User behavior, conversion funnels

## Privacy & Compliance

### GDPR Compliance

- Analytics only load in production
- User consent can be implemented
- Data anonymization enabled
- Cookie-free tracking where possible

### Data Retention

- **Google Analytics**: 14 months (default)
- **Microsoft Clarity**: 6 months (default)
- Both can be configured for longer retention

## Testing

### Development

- Analytics disabled in development
- Only loads in production environment
- No data pollution during development

### Production

- Full tracking enabled
- Real-time data collection
- Complete user journey tracking

## Troubleshooting

### Common Issues

1. **Analytics not loading**: Check environment variables
2. **No data in GA4**: Verify Measurement ID
3. **Clarity not working**: Check Clarity ID
4. **Events not firing**: Check browser console for errors

### Debug Mode

- Open browser DevTools
- Check Network tab for analytics requests
- Verify scripts are loading correctly
- Check for JavaScript errors

## Performance Impact

### Minimal Impact

- **Google Analytics**: ~15KB gzipped
- **Microsoft Clarity**: ~20KB gzipped
- **Total overhead**: ~35KB (negligible)
- **Loading strategy**: After interactive (non-blocking)

### Optimization

- Scripts load after page interaction
- No impact on Core Web Vitals
- Lazy loading for analytics
- Conditional loading based on environment
