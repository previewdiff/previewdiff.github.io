window.PREVIEWDIFF_TREE_EXAMPLES = [
  {
    "id": "000009",
    "prompt": "five bears and a donut",
    "note": "Supplied tree assets: 8 root previews at checkpoint 5, 48 child previews at checkpoint 12, and the attached final PreviewDiff output.",
    "gif": "img/tree/000009/tree_generation.gif",
    "final": "img/tree/000009/final.webp",
    "frames": [
      {
        "src": "img/tree/000009/steps/step_00.webp",
        "label": "Decode roots",
        "caption": "Eight root seeds are denoised only to an intermediate checkpoint and decoded into previews.",
        "alt": "Composite frame showing eight root seed previews for the PreviewDiff tree."
      },
      {
        "src": "img/tree/000009/steps/step_01.webp",
        "label": "Select frontier",
        "caption": "A partial state can be selected before full denoising finishes.",
        "alt": "Composite frame highlighting one root preview as a selected frontier node."
      },
      {
        "src": "img/tree/000009/steps/step_02.webp",
        "label": "Branch corrections",
        "caption": "The selected state branches over semantic variants and local latent restarts.",
        "alt": "Composite frame showing root-to-child branches for semantic variants and branch seeds."
      },
      {
        "src": "img/tree/000009/steps/step_03.webp",
        "label": "Score and prune",
        "caption": "The critic scores child previews and the beam keeps a survivor.",
        "alt": "Composite frame showing pruning of child nodes and retained branch."
      },
      {
        "src": "img/tree/000009/steps/step_04.webp",
        "label": "Roll final output",
        "caption": "The surviving latent continuation is rolled to a completed PreviewDiff image.",
        "alt": "Composite frame showing the selected branch rolled out into the final image."
      },
      {
        "src": "img/tree/000009/steps/step_05.webp",
        "label": "Final selected path",
        "caption": "The final frame stays focused on the selected PreviewDiff path; Best-of-N comparisons are kept in the qualitative gallery below.",
        "alt": "Composite frame showing the selected PreviewDiff root, kept branch, and final rollout."
      }
    ],
    "roots": [
      {
        "index": 0,
        "seed": "98052",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98052_cp005.webp",
        "label": "root 0 \u00b7 seed 98052 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98052 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 1,
        "seed": "98053",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98053_cp005.webp",
        "label": "root 1 \u00b7 seed 98053 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98053 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 2,
        "seed": "98054",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98054_cp005.webp",
        "label": "root 2 \u00b7 seed 98054 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98054 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 3,
        "seed": "98055",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98055_cp005.webp",
        "label": "root 3 \u00b7 seed 98055 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98055 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 4,
        "seed": "98056",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98056_cp005.webp",
        "label": "root 4 \u00b7 seed 98056 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98056 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 5,
        "seed": "98057",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98057_cp005.webp",
        "label": "root 5 \u00b7 seed 98057 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98057 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 6,
        "seed": "98058",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98058_cp005.webp",
        "label": "root 6 \u00b7 seed 98058 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98058 decoded at checkpoint 5 for the prompt five bears and a donut."
      },
      {
        "index": 7,
        "seed": "98059",
        "checkpoint": "005",
        "src": "img/tree/000009/roots/root_seed98059_cp005.webp",
        "label": "root 7 \u00b7 seed 98059 \u00b7 checkpoint 5",
        "alt": "PreviewDiff root seed 98059 decoded at checkpoint 5 for the prompt five bears and a donut."
      }
    ],
    "children": {
      "0": [
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 0,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node0_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 0, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "1": [
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 1,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node1_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 1, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "2": [
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 2,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node2_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 2, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "3": [
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 3,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node3_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 3, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "4": [
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 4,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node4_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 4, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "5": [
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 5,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node5_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 5, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "6": [
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 6,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node6_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 6, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ],
      "7": [
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v0_r1_b0_cp012.webp",
          "label": "v0 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 0, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 0,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v0_r1_b1_cp012.webp",
          "label": "v0 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 0, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v1_r1_b0_cp012.webp",
          "label": "v1 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 1, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 1,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v1_r1_b1_cp012.webp",
          "label": "v1 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 1, branch seed 1, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 0,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v2_r1_b0_cp012.webp",
          "label": "v2 \u00b7 branch 0 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 2, branch seed 0, restart depth 1, checkpoint 12."
        },
        {
          "rootIndex": 7,
          "depth": 1,
          "variant": 2,
          "restart": 1,
          "branch": 1,
          "checkpoint": 12,
          "src": "img/tree/000009/children/node7_d1_v2_r1_b1_cp012.webp",
          "label": "v2 \u00b7 branch 1 \u00b7 restart 1 \u00b7 checkpoint 12",
          "alt": "Child preview for root 7, semantic variant 2, branch seed 1, restart depth 1, checkpoint 12."
        }
      ]
    }
  }
];
