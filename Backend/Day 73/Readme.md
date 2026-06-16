## Test and Scale Apps

This guide covers two common tasks while running backend apps on Kubernetes:

1. Continuously monitoring pod resource usage
2. Sending bulk HTTP requests for load testing

## 1) Monitor Pods (Windows Alternative to `watch`)

Linux users often run:

```bash
watch -n 2 kubectl top pods
```

On Windows PowerShell, use this loop instead:

```powershell
while ($true) {
	kubectl top pods
	Start-Sleep 2
	Clear-Host
}
```

### What this does

- `kubectl top pods`: shows CPU and memory usage for pods
- `Start-Sleep 2`: refreshes every 2 seconds
- `Clear-Host`: clears the screen before each refresh

### Stop monitoring

Press `Ctrl + C` in the terminal.

## 2) Load Test with `autocannon`

Instead of using `hey`, you can use `autocannon` for bulk request testing.

### Install

```bash
npm install -g autocannon
```

### Example command

```bash
autocannon -a 200 -d 120 http://localhost
```

### Command breakdown

- `-a 200`: total 200 requests
- `-d 120`: run for 120 seconds (2 minutes)
- `http://localhost`: target URL

## 3) Suggested Workflow

1. Deploy your app to Kubernetes.
2. Start pod monitoring with the PowerShell loop.
3. Run `autocannon` against your service endpoint.
4. Observe CPU and memory changes using `kubectl top pods`.
5. Tune replicas/resources and test again.

## 4) Useful Tips

- Test against the real service URL (for example, NodePort/Ingress), not only localhost.
- Keep request counts and durations consistent when comparing results.
- Record baseline metrics before applying scaling changes.
- If `kubectl top` fails, verify Metrics Server is installed in the cluster.

## 5) Quick Troubleshooting

- `kubectl top pods` returns metrics error:
  - Check Metrics Server installation and pod health.
- Load test cannot reach app:
  - Confirm the service/ingress is exposed and reachable.
- Results look unstable:
  - Run multiple rounds and average the numbers.
